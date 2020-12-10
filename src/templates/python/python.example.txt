import os
import re
import click
from prompt_toolkit.shortcuts import print_formatted_text

TEMPLATE_DIR = os.path.join(os.path.dirname(__file__), './template')

def select_service_and_operation():
    service_names = Session().get_available_services()
    service_completer = WordCompleter(service_names)
    service_name = prompt(u'Select service: ',
                          completer=service_completer)
    if service_name not in service_names:
        click.secho(u'{} is not valid service'.format(service_name),
                    fg='red')
        raise click.Abort()
    moto_client = get_moto_implementation(service_name)
    real_client = boto3.client(service_name, region_name='us-east-1')
    implemented = []
    not_implemented = []

    operation_names = [xform_name(op) for op in
                       real_client.meta.service_model.operation_names]
    for op in operation_names:
        if moto_client and op in dir(moto_client):
            implemented.append(op)
        else:
            not_implemented.append(op)
    operation_completer = WordCompleter(operation_names)

    click.echo('==Current Implementation Status==')
    for operation_name in operation_names:
        check = ('X' if operation_name in implemented else ' ')
        click.secho('[{}] {}'.format(check, operation_name))
    click.echo('=================================')
    operation_name = prompt(u'Select Operation: ',
                            completer=operation_completer)

    if operation_name not in operation_names:
        click.secho('{} is not valid operation'.format(operation_name),
                    fg='red')
        raise click.Abort()

    if operation_name in implemented:
        click.secho('{} is already implemented'.format(operation_name),
                    fg='red')
        raise click.Abort()
    return (service_name, operation_name)


def append_mock_dict_to_backends_py(service):
    path = os.path.join(os.path.dirname(__file__), '..', 'moto',
                        'backends.py')
    with open(path) as f:
        lines = [_.replace('\n', '') for _ in f.readlines()]

    if any(_ for _ in lines
           if re.match('.*"{}": {}_backends.*'.format(service,
           service), _)):
        return
    filtered_lines = [_ for _ in lines
                      if re.match('.*".*":.*_backends.*', _)]
    last_elem_line_index = lines.index(filtered_lines[-1])

    new_line = '    "{}": ("{}", "{}_backends"),'.format(service,
            get_escaped_service(service), get_escaped_service(service))
    prev_line = lines[last_elem_line_index]
    if not prev_line.endswith('{') and not prev_line.endswith(','):
        lines[last_elem_line_index] += ','
    lines.insert(last_elem_line_index + 1, new_line)

    body = '\n'.join(lines) + '\n'
    with open(path, 'w') as f:
        f.write(body)


def to_upper_camel_case(s):
    return ''.join([_.title() for _ in s.split('_')])


def get_operation_name_in_keys(operation_name, operation_keys):
    index = [_.lower() for _ in
             operation_keys].index(operation_name.lower())
    return operation_keys[index]


def _get_subtree(
    name,
    shape,
    replace_list,
    name_prefix=[],
    ):
    class_name = shape.__class__.__name__
    if class_name in ('StringShape', 'Shape'):
        t = etree.Element(name)
        if name_prefix:
            t.text = '{{ %s.%s }}' % (name_prefix[-1],
                    to_snake_case(name))
        else:
            t.text = '{{ %s }}' % to_snake_case(name)
        return t
    elif class_name in ('ListShape', ):
        replace_list.append((name, name_prefix))
        t = etree.Element(name)
        t_member = etree.Element('member')
        t.append(t_member)
        for (nested_name, nested_shape) in shape.member.members.items():
            t_member.append(_get_subtree(nested_name, nested_shape,
                            replace_list, name_prefix
                            + [singularize(name.lower())]))

        return t
    raise ValueError('Not supported Shape')


def get_response_query_template(service, operation):
    """refers to definition of API in botocore, and autogenerates template
    Assume that response format is xml when protocol is query

    You can see example of elbv2 from link below.
      https://github.com/boto/botocore/blob/develop/botocore/data/elbv2/2015-12-01/service-2.json
    """

    client = boto3.client(service)
    aws_operation_name = \
        get_operation_name_in_keys(to_upper_camel_case(operation),
                                   list(client._service_model._service_description['operations'
                                   ].keys()))

    op_model = client._service_model.operation_model(aws_operation_name)
    result_wrapper = op_model.output_shape.serialization['resultWrapper'
            ]
    response_wrapper = result_wrapper.replace('Result', 'Response')
    metadata = op_model.metadata
    xml_namespace = metadata['xmlNamespace']

    # build xml tree

    t_root = etree.Element(response_wrapper, xmlns=xml_namespace)

    # build metadata

    t_metadata = etree.Element('ResponseMetadata')
    t_request_id = etree.Element('RequestId')
    t_request_id.text = '1549581b-12b7-11e3-895e-1334aEXAMPLE'
    t_metadata.append(t_request_id)
    t_root.append(t_metadata)

    # build result

    t_result = etree.Element(result_wrapper)
    outputs = op_model.output_shape.members
    replace_list = []
    for (output_name, output_shape) in outputs.items():
        t_result.append(_get_subtree(output_name, output_shape,
                        replace_list))
    t_root.append(t_result)
    xml_body = etree.tostring(t_root, pretty_print=True).decode('utf-8')
    xml_body_lines = xml_body.splitlines()
    for replace in replace_list:
        name = replace[0]
        prefix = replace[1]
        singular_name = singularize(name)

        start_tag = '<%s>' % name
        iter_name = ('{}.{}'.format(prefix[-1],
                     name.lower()) if prefix else name.lower())
        loop_start = '{%% for %s in %s %%}' % (singular_name.lower(),
                iter_name)
        end_tag = '</%s>' % name
        loop_end = '{{ endfor }}'

        start_tag_indexes = [i for (i, l) in enumerate(xml_body_lines)
                             if start_tag in l]
        if len(start_tag_indexes) != 1:
            raise Exception('tag %s not found in response body'
                            % start_tag)
        start_tag_index = start_tag_indexes[0]
        xml_body_lines.insert(start_tag_index + 1, loop_start)

        end_tag_indexes = [i for (i, l) in enumerate(xml_body_lines)
                           if end_tag in l]
        if len(end_tag_indexes) != 1:
            raise Exception('tag %s not found in response body'
                            % end_tag)
        end_tag_index = end_tag_indexes[0]
        xml_body_lines.insert(end_tag_index, loop_end)
    xml_body = '\n'.join(xml_body_lines)
    body = '\n{}_TEMPLATE = """{}"""'.format(operation.upper(),
            xml_body)
    return body


def get_escaped_service(service):
    return service.replace('-', '')


def get_lib_dir(service):
    return os.path.join('moto', get_escaped_service(service))


def get_test_dir(service):
    return os.path.join('tests',
                        'test_{}'.format(get_escaped_service(service)))


@click.command()
def main():
    (service, operation) = select_service_and_operation()
    api_protocol = \
        boto3.client(service)._service_model.metadata['protocol']
    initialize_service(service, operation, api_protocol)

    if api_protocol in ['query', 'json', 'rest-json']:
        insert_codes(service, operation, api_protocol)
    else:
        print_progress('skip inserting code',
                       'api protocol "{}" is not supported'.format(api_protocol),
                       'yellow')

    click.echo('You will still need to add the mock into "__init__.py"'.format(service))

if __name__ == '__main__':
    main()
