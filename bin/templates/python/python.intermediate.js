module.exports = [
    {
        "group": "LineNr",
        "row": 1,
        "char": "1"
    },
    {
        "group": "pythonInclude",
        "linkedGroup": "PreProc",
        "row": 1,
        "char": "import"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 1,
        "char": " os\n"
    },
    {
        "group": "LineNr",
        "row": 2,
        "char": "2"
    },
    {
        "group": "pythonInclude",
        "linkedGroup": "PreProc",
        "row": 2,
        "char": "import"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 2,
        "char": " re\n"
    },
    {
        "group": "LineNr",
        "row": 3,
        "char": "3"
    },
    {
        "group": "pythonInclude",
        "linkedGroup": "PreProc",
        "row": 3,
        "char": "import"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 3,
        "char": " click\n"
    },
    {
        "group": "LineNr",
        "row": 4,
        "char": "4"
    },
    {
        "group": "pythonInclude",
        "linkedGroup": "PreProc",
        "row": 4,
        "char": "from"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 4,
        "char": " prompt_toolkit.shortcuts "
    },
    {
        "group": "pythonInclude",
        "linkedGroup": "PreProc",
        "row": 4,
        "char": "import"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 4,
        "char": " print_formatted_text\n"
    },
    {
        "group": "LineNr",
        "row": 5,
        "char": "5"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 5,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 6,
        "char": "6"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 6,
        "char": "TEMPLATE_DIR &#61; os.path.join(os.path.dirname(__file__), "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 6,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 6,
        "char": "./template"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 6,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 6,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 7,
        "char": "7"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 7,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 8,
        "char": "8"
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 8,
        "char": "def"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 8,
        "char": " "
    },
    {
        "group": "pythonFunction",
        "linkedGroup": "Identifier",
        "row": 8,
        "char": "select_service_and_operation"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 8,
        "char": "():\n"
    },
    {
        "group": "LineNr",
        "row": 9,
        "char": "9"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 9,
        "char": "    service_names &#61; Session().get_available_services()\n"
    },
    {
        "group": "LineNr",
        "row": 10,
        "char": "10"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 10,
        "char": "    service_completer &#61; WordCompleter(service_names)\n"
    },
    {
        "group": "LineNr",
        "row": 11,
        "char": "11"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 11,
        "char": "    service_name &#61; prompt("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 11,
        "char": "u&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 11,
        "char": "Select service: "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 11,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 11,
        "char": ",\n"
    },
    {
        "group": "LineNr",
        "row": 12,
        "char": "12"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 12,
        "char": "                          completer&#61;service_completer)\n"
    },
    {
        "group": "LineNr",
        "row": 13,
        "char": "13"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 13,
        "char": "    "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 13,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 13,
        "char": " service_name "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 13,
        "char": "not"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 13,
        "char": " "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 13,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 13,
        "char": " service_names:\n"
    },
    {
        "group": "LineNr",
        "row": 14,
        "char": "14"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 14,
        "char": "        click.secho("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 14,
        "char": "u&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 14,
        "char": "{} is not valid service"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 14,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 14,
        "char": ".format(service_name),\n"
    },
    {
        "group": "LineNr",
        "row": 15,
        "char": "15"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 15,
        "char": "                    fg&#61;"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 15,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 15,
        "char": "red"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 15,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 15,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 16,
        "char": "16"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 16,
        "char": "        "
    },
    {
        "group": "pythonException",
        "linkedGroup": "Statement",
        "row": 16,
        "char": "raise"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 16,
        "char": " click.Abort()\n"
    },
    {
        "group": "LineNr",
        "row": 17,
        "char": "17"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 17,
        "char": "    moto_client &#61; get_moto_implementation(service_name)\n"
    },
    {
        "group": "LineNr",
        "row": 18,
        "char": "18"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 18,
        "char": "    real_client &#61; boto3.client(service_name, region_name&#61;"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 18,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 18,
        "char": "us-east-1"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 18,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 18,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 19,
        "char": "19"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 19,
        "char": "    implemented &#61; []\n"
    },
    {
        "group": "LineNr",
        "row": 20,
        "char": "20"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 20,
        "char": "    not_implemented &#61; []\n"
    },
    {
        "group": "LineNr",
        "row": 21,
        "char": "21"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 21,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 22,
        "char": "22"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 22,
        "char": "    operation_names &#61; [xform_name(op) "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 22,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 22,
        "char": " op "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 22,
        "char": "in\n"
    },
    {
        "group": "LineNr",
        "row": 23,
        "char": "23"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 23,
        "char": "                       real_client.meta.service_model.operation_names]\n"
    },
    {
        "group": "LineNr",
        "row": 24,
        "char": "24"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 24,
        "char": "    "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 24,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 24,
        "char": " op "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 24,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 24,
        "char": " operation_names:\n"
    },
    {
        "group": "LineNr",
        "row": 25,
        "char": "25"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 25,
        "char": "        "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 25,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 25,
        "char": " moto_client "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 25,
        "char": "and"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 25,
        "char": " op "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 25,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 25,
        "char": " "
    },
    {
        "group": "pythonBuiltin",
        "linkedGroup": "Identifier",
        "row": 25,
        "char": "dir"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 25,
        "char": "(moto_client):\n"
    },
    {
        "group": "LineNr",
        "row": 26,
        "char": "26"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 26,
        "char": "            implemented.append(op)\n"
    },
    {
        "group": "LineNr",
        "row": 27,
        "char": "27"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 27,
        "char": "        "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 27,
        "char": "else"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 27,
        "char": ":\n"
    },
    {
        "group": "LineNr",
        "row": 28,
        "char": "28"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 28,
        "char": "            not_implemented.append(op)\n"
    },
    {
        "group": "LineNr",
        "row": 29,
        "char": "29"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 29,
        "char": "    operation_completer &#61; WordCompleter(operation_names)\n"
    },
    {
        "group": "LineNr",
        "row": 30,
        "char": "30"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 30,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 31,
        "char": "31"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 31,
        "char": "    click.echo("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 31,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 31,
        "char": "&#61;&#61;Current Implementation Status&#61;&#61;"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 31,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 31,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 32,
        "char": "32"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 32,
        "char": "    "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 32,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 32,
        "char": " operation_name "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 32,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 32,
        "char": " operation_names:\n"
    },
    {
        "group": "LineNr",
        "row": 33,
        "char": "33"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 33,
        "char": "        check &#61; ("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 33,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 33,
        "char": "X"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 33,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 33,
        "char": " "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 33,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 33,
        "char": " operation_name "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 33,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 33,
        "char": " implemented "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 33,
        "char": "else"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 33,
        "char": " "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 33,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 33,
        "char": " "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 33,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 33,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 34,
        "char": "34"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 34,
        "char": "        click.secho("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 34,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 34,
        "char": "[{}] {}"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 34,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 34,
        "char": ".format(check, operation_name))\n"
    },
    {
        "group": "LineNr",
        "row": 35,
        "char": "35"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 35,
        "char": "    click.echo("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 35,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 35,
        "char": "&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 35,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 35,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 36,
        "char": "36"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 36,
        "char": "    operation_name &#61; prompt("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 36,
        "char": "u&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 36,
        "char": "Select Operation: "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 36,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 36,
        "char": ",\n"
    },
    {
        "group": "LineNr",
        "row": 37,
        "char": "37"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 37,
        "char": "                            completer&#61;operation_completer)\n"
    },
    {
        "group": "LineNr",
        "row": 38,
        "char": "38"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 38,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 39,
        "char": "39"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 39,
        "char": "    "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 39,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 39,
        "char": " operation_name "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 39,
        "char": "not"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 39,
        "char": " "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 39,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 39,
        "char": " operation_names:\n"
    },
    {
        "group": "LineNr",
        "row": 40,
        "char": "40"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 40,
        "char": "        click.secho("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 40,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 40,
        "char": "{} is not valid operation"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 40,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 40,
        "char": ".format(operation_name),\n"
    },
    {
        "group": "LineNr",
        "row": 41,
        "char": "41"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 41,
        "char": "                    fg&#61;"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 41,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 41,
        "char": "red"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 41,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 41,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 42,
        "char": "42"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 42,
        "char": "        "
    },
    {
        "group": "pythonException",
        "linkedGroup": "Statement",
        "row": 42,
        "char": "raise"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 42,
        "char": " click.Abort()\n"
    },
    {
        "group": "LineNr",
        "row": 43,
        "char": "43"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 43,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 44,
        "char": "44"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 44,
        "char": "    "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 44,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 44,
        "char": " operation_name "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 44,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 44,
        "char": " implemented:\n"
    },
    {
        "group": "LineNr",
        "row": 45,
        "char": "45"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 45,
        "char": "        click.secho("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 45,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 45,
        "char": "{} is already implemented"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 45,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 45,
        "char": ".format(operation_name),\n"
    },
    {
        "group": "LineNr",
        "row": 46,
        "char": "46"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 46,
        "char": "                    fg&#61;"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 46,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 46,
        "char": "red"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 46,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 46,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 47,
        "char": "47"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 47,
        "char": "        "
    },
    {
        "group": "pythonException",
        "linkedGroup": "Statement",
        "row": 47,
        "char": "raise"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 47,
        "char": " click.Abort()\n"
    },
    {
        "group": "LineNr",
        "row": 48,
        "char": "48"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 48,
        "char": "    "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 48,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 48,
        "char": " (service_name, operation_name)\n"
    },
    {
        "group": "LineNr",
        "row": 49,
        "char": "49"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 49,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 50,
        "char": "50"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 50,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 51,
        "char": "51"
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 51,
        "char": "def"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 51,
        "char": " "
    },
    {
        "group": "pythonFunction",
        "linkedGroup": "Identifier",
        "row": 51,
        "char": "append_mock_dict_to_backends_py"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 51,
        "char": "(service):\n"
    },
    {
        "group": "LineNr",
        "row": 52,
        "char": "52"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 52,
        "char": "    path &#61; os.path.join(os.path.dirname(__file__), "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 52,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 52,
        "char": ".."
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 52,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 52,
        "char": ", "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 52,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 52,
        "char": "moto"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 52,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 52,
        "char": ",\n"
    },
    {
        "group": "LineNr",
        "row": 53,
        "char": "53"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 53,
        "char": "                        "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 53,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 53,
        "char": "backends.py"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 53,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 53,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 54,
        "char": "54"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 54,
        "char": "    "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 54,
        "char": "with"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 54,
        "char": " "
    },
    {
        "group": "pythonBuiltin",
        "linkedGroup": "Identifier",
        "row": 54,
        "char": "open"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 54,
        "char": "(path) "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 54,
        "char": "as"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 54,
        "char": " f:\n"
    },
    {
        "group": "LineNr",
        "row": 55,
        "char": "55"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 55,
        "char": "        lines &#61; [_.replace("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 55,
        "char": "&#39;"
    },
    {
        "group": "pythonEscape",
        "linkedGroup": "Special",
        "row": 55,
        "char": "\\n"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 55,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 55,
        "char": ", "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 55,
        "char": "&#39;&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 55,
        "char": ") "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 55,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 55,
        "char": " _ "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 55,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 55,
        "char": " f.readlines()]\n"
    },
    {
        "group": "LineNr",
        "row": 56,
        "char": "56"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 56,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 57,
        "char": "57"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 57,
        "char": "    "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 57,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 57,
        "char": " "
    },
    {
        "group": "pythonBuiltin",
        "linkedGroup": "Identifier",
        "row": 57,
        "char": "any"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 57,
        "char": "(_ "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 57,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 57,
        "char": " _ "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 57,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 57,
        "char": " lines\n"
    },
    {
        "group": "LineNr",
        "row": 58,
        "char": "58"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 58,
        "char": "           "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 58,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 58,
        "char": " re.match("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 58,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 58,
        "char": ".*&quot;{}&quot;: {}_backends.*"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 58,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 58,
        "char": ".format(service,\n"
    },
    {
        "group": "LineNr",
        "row": 59,
        "char": "59"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 59,
        "char": "           service), _)):\n"
    },
    {
        "group": "LineNr",
        "row": 60,
        "char": "60"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 60,
        "char": "        "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 60,
        "char": "return\n"
    },
    {
        "group": "LineNr",
        "row": 61,
        "char": "61"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 61,
        "char": "    filtered_lines &#61; [_ "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 61,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 61,
        "char": " _ "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 61,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 61,
        "char": " lines\n"
    },
    {
        "group": "LineNr",
        "row": 62,
        "char": "62"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 62,
        "char": "                      "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 62,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 62,
        "char": " re.match("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 62,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 62,
        "char": ".*&quot;.*&quot;:.*_backends.*"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 62,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 62,
        "char": ", _)]\n"
    },
    {
        "group": "LineNr",
        "row": 63,
        "char": "63"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 63,
        "char": "    last_elem_line_index &#61; lines.index(filtered_lines[-"
    },
    {
        "group": "pythonNumber",
        "linkedGroup": "Constant",
        "row": 63,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 63,
        "char": "])\n"
    },
    {
        "group": "LineNr",
        "row": 64,
        "char": "64"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 64,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 65,
        "char": "65"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 65,
        "char": "    new_line &#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 65,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 65,
        "char": "    &quot;{}&quot;: (&quot;{}&quot;, &quot;{}_backends&quot;),"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 65,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 65,
        "char": ".format(service,\n"
    },
    {
        "group": "LineNr",
        "row": 66,
        "char": "66"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 66,
        "char": "            get_escaped_service(service), get_escaped_service(service))\n"
    },
    {
        "group": "LineNr",
        "row": 67,
        "char": "67"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 67,
        "char": "    prev_line &#61; lines[last_elem_line_index]\n"
    },
    {
        "group": "LineNr",
        "row": 68,
        "char": "68"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 68,
        "char": "    "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 68,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 68,
        "char": " "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 68,
        "char": "not"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 68,
        "char": " prev_line.endswith("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 68,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 68,
        "char": "{"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 68,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 68,
        "char": ") "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 68,
        "char": "and"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 68,
        "char": " "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 68,
        "char": "not"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 68,
        "char": " prev_line.endswith("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 68,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 68,
        "char": ","
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 68,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 68,
        "char": "):\n"
    },
    {
        "group": "LineNr",
        "row": 69,
        "char": "69"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 69,
        "char": "        lines[last_elem_line_index] +&#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 69,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 69,
        "char": ","
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 69,
        "char": "&#39;\n"
    },
    {
        "group": "LineNr",
        "row": 70,
        "char": "70"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 70,
        "char": "    lines.insert(last_elem_line_index + "
    },
    {
        "group": "pythonNumber",
        "linkedGroup": "Constant",
        "row": 70,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 70,
        "char": ", new_line)\n"
    },
    {
        "group": "LineNr",
        "row": 71,
        "char": "71"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 71,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 72,
        "char": "72"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 72,
        "char": "    body &#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 72,
        "char": "&#39;"
    },
    {
        "group": "pythonEscape",
        "linkedGroup": "Special",
        "row": 72,
        "char": "\\n"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 72,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 72,
        "char": ".join(lines) + "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 72,
        "char": "&#39;"
    },
    {
        "group": "pythonEscape",
        "linkedGroup": "Special",
        "row": 72,
        "char": "\\n"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 72,
        "char": "&#39;\n"
    },
    {
        "group": "LineNr",
        "row": 73,
        "char": "73"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 73,
        "char": "    "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 73,
        "char": "with"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 73,
        "char": " "
    },
    {
        "group": "pythonBuiltin",
        "linkedGroup": "Identifier",
        "row": 73,
        "char": "open"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 73,
        "char": "(path, "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 73,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 73,
        "char": "w"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 73,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 73,
        "char": ") "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 73,
        "char": "as"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 73,
        "char": " f:\n"
    },
    {
        "group": "LineNr",
        "row": 74,
        "char": "74"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 74,
        "char": "        f.write(body)\n"
    },
    {
        "group": "LineNr",
        "row": 75,
        "char": "75"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 75,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 76,
        "char": "76"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 76,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 77,
        "char": "77"
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 77,
        "char": "def"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 77,
        "char": " "
    },
    {
        "group": "pythonFunction",
        "linkedGroup": "Identifier",
        "row": 77,
        "char": "to_upper_camel_case"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 77,
        "char": "(s):\n"
    },
    {
        "group": "LineNr",
        "row": 78,
        "char": "78"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 78,
        "char": "    "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 78,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 78,
        "char": " "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 78,
        "char": "&#39;&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 78,
        "char": ".join([_.title() "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 78,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 78,
        "char": " _ "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 78,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 78,
        "char": " s.split("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 78,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 78,
        "char": "_"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 78,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 78,
        "char": ")])\n"
    },
    {
        "group": "LineNr",
        "row": 79,
        "char": "79"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 79,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 80,
        "char": "80"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 80,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 81,
        "char": "81"
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 81,
        "char": "def"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 81,
        "char": " "
    },
    {
        "group": "pythonFunction",
        "linkedGroup": "Identifier",
        "row": 81,
        "char": "get_operation_name_in_keys"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 81,
        "char": "(operation_name, operation_keys):\n"
    },
    {
        "group": "LineNr",
        "row": 82,
        "char": "82"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 82,
        "char": "    index &#61; [_.lower() "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 82,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 82,
        "char": " _ "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 82,
        "char": "in\n"
    },
    {
        "group": "LineNr",
        "row": 83,
        "char": "83"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 83,
        "char": "             operation_keys].index(operation_name.lower())\n"
    },
    {
        "group": "LineNr",
        "row": 84,
        "char": "84"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 84,
        "char": "    "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 84,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 84,
        "char": " operation_keys[index]\n"
    },
    {
        "group": "LineNr",
        "row": 85,
        "char": "85"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 85,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 86,
        "char": "86"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 86,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 87,
        "char": "87"
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 87,
        "char": "def"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 87,
        "char": " "
    },
    {
        "group": "pythonFunction",
        "linkedGroup": "Identifier",
        "row": 87,
        "char": "_get_subtree"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 87,
        "char": "(\n"
    },
    {
        "group": "LineNr",
        "row": 88,
        "char": "88"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 88,
        "char": "    name,\n"
    },
    {
        "group": "LineNr",
        "row": 89,
        "char": "89"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 89,
        "char": "    shape,\n"
    },
    {
        "group": "LineNr",
        "row": 90,
        "char": "90"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 90,
        "char": "    replace_list,\n"
    },
    {
        "group": "LineNr",
        "row": 91,
        "char": "91"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 91,
        "char": "    name_prefix&#61;[],\n"
    },
    {
        "group": "LineNr",
        "row": 92,
        "char": "92"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 92,
        "char": "    ):\n"
    },
    {
        "group": "LineNr",
        "row": 93,
        "char": "93"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 93,
        "char": "    class_name &#61; shape.__class__.__name__\n"
    },
    {
        "group": "LineNr",
        "row": 94,
        "char": "94"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 94,
        "char": "    "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 94,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 94,
        "char": " class_name "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 94,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 94,
        "char": " ("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 94,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 94,
        "char": "StringShape"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 94,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 94,
        "char": ", "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 94,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 94,
        "char": "Shape"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 94,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 94,
        "char": "):\n"
    },
    {
        "group": "LineNr",
        "row": 95,
        "char": "95"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 95,
        "char": "        t &#61; etree.Element(name)\n"
    },
    {
        "group": "LineNr",
        "row": 96,
        "char": "96"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 96,
        "char": "        "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 96,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 96,
        "char": " name_prefix:\n"
    },
    {
        "group": "LineNr",
        "row": 97,
        "char": "97"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 97,
        "char": "            t.text &#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 97,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 97,
        "char": "{{ %s.%s }}"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 97,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 97,
        "char": " % (name_prefix[-"
    },
    {
        "group": "pythonNumber",
        "linkedGroup": "Constant",
        "row": 97,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 97,
        "char": "],\n"
    },
    {
        "group": "LineNr",
        "row": 98,
        "char": "98"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 98,
        "char": "                    to_snake_case(name))\n"
    },
    {
        "group": "LineNr",
        "row": 99,
        "char": "99"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 99,
        "char": "        "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 99,
        "char": "else"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 99,
        "char": ":\n"
    },
    {
        "group": "LineNr",
        "row": 100,
        "char": "100"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 100,
        "char": "            t.text &#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 100,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 100,
        "char": "{{ %s }}"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 100,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 100,
        "char": " % to_snake_case(name)\n"
    },
    {
        "group": "LineNr",
        "row": 101,
        "char": "101"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 101,
        "char": "        "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 101,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 101,
        "char": " t\n"
    },
    {
        "group": "LineNr",
        "row": 102,
        "char": "102"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 102,
        "char": "    "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 102,
        "char": "elif"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 102,
        "char": " class_name "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 102,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 102,
        "char": " ("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 102,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 102,
        "char": "ListShape"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 102,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 102,
        "char": ", ):\n"
    },
    {
        "group": "LineNr",
        "row": 103,
        "char": "103"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 103,
        "char": "        replace_list.append((name, name_prefix))\n"
    },
    {
        "group": "LineNr",
        "row": 104,
        "char": "104"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 104,
        "char": "        t &#61; etree.Element(name)\n"
    },
    {
        "group": "LineNr",
        "row": 105,
        "char": "105"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 105,
        "char": "        t_member &#61; etree.Element("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 105,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 105,
        "char": "member"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 105,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 105,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 106,
        "char": "106"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 106,
        "char": "        t.append(t_member)\n"
    },
    {
        "group": "LineNr",
        "row": 107,
        "char": "107"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 107,
        "char": "        "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 107,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 107,
        "char": " (nested_name, nested_shape) "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 107,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 107,
        "char": " shape.member.members.items():\n"
    },
    {
        "group": "LineNr",
        "row": 108,
        "char": "108"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 108,
        "char": "            t_member.append(_get_subtree(nested_name, nested_shape,\n"
    },
    {
        "group": "LineNr",
        "row": 109,
        "char": "109"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 109,
        "char": "                            replace_list, name_prefix\n"
    },
    {
        "group": "LineNr",
        "row": 110,
        "char": "110"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 110,
        "char": "                            + [singularize(name.lower())]))\n"
    },
    {
        "group": "LineNr",
        "row": 111,
        "char": "111"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 111,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 112,
        "char": "112"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 112,
        "char": "        "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 112,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 112,
        "char": " t\n"
    },
    {
        "group": "LineNr",
        "row": 113,
        "char": "113"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 113,
        "char": "    "
    },
    {
        "group": "pythonException",
        "linkedGroup": "Statement",
        "row": 113,
        "char": "raise"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 113,
        "char": " "
    },
    {
        "group": "pythonExceptions",
        "linkedGroup": "Type",
        "row": 113,
        "char": "ValueError"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 113,
        "char": "("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 113,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 113,
        "char": "Not supported Shape"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 113,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 113,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 114,
        "char": "114"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 114,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 115,
        "char": "115"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 115,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 116,
        "char": "116"
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 116,
        "char": "def"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 116,
        "char": " "
    },
    {
        "group": "pythonFunction",
        "linkedGroup": "Identifier",
        "row": 116,
        "char": "get_response_query_template"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 116,
        "char": "(service, operation):\n"
    },
    {
        "group": "LineNr",
        "row": 117,
        "char": "117"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 117,
        "char": "    "
    },
    {
        "group": "pythonTripleQuotes",
        "linkedGroup": "Constant",
        "row": 117,
        "char": "&quot;&quot;&quot;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 117,
        "char": "refers to definition of API in botocore, and autogenerates template\n"
    },
    {
        "group": "LineNr",
        "row": 118,
        "char": "118"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 118,
        "char": "    Assume that response format is xml when protocol is query\n"
    },
    {
        "group": "LineNr",
        "row": 119,
        "char": "119"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 119,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 120,
        "char": "120"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 120,
        "char": "    You can see example of elbv2 from link below.\n"
    },
    {
        "group": "LineNr",
        "row": 121,
        "char": "121"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 121,
        "char": "      https://github.com/boto/botocore/blob/develop/botocore/data/elbv2/2015-12-01/service-2.json\n"
    },
    {
        "group": "LineNr",
        "row": 122,
        "char": "122"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 122,
        "char": "    "
    },
    {
        "group": "pythonTripleQuotes",
        "linkedGroup": "Constant",
        "row": 122,
        "char": "&quot;&quot;&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 123,
        "char": "123"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 123,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 124,
        "char": "124"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 124,
        "char": "    client &#61; boto3.client(service)\n"
    },
    {
        "group": "LineNr",
        "row": 125,
        "char": "125"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 125,
        "char": "    aws_operation_name &#61; "
    },
    {
        "group": "pythonEscape",
        "linkedGroup": "Special",
        "row": 125,
        "char": "\\\n"
    },
    {
        "group": "LineNr",
        "row": 126,
        "char": "126"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 126,
        "char": "        get_operation_name_in_keys(to_upper_camel_case(operation),\n"
    },
    {
        "group": "LineNr",
        "row": 127,
        "char": "127"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 127,
        "char": "                                   "
    },
    {
        "group": "pythonBuiltin",
        "linkedGroup": "Identifier",
        "row": 127,
        "char": "list"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 127,
        "char": "(client._service_model._service_description["
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 127,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 127,
        "char": "operations"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 127,
        "char": "&#39;\n"
    },
    {
        "group": "LineNr",
        "row": 128,
        "char": "128"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 128,
        "char": "                                   ].keys()))\n"
    },
    {
        "group": "LineNr",
        "row": 129,
        "char": "129"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 129,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 130,
        "char": "130"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 130,
        "char": "    op_model &#61; client._service_model.operation_model(aws_operation_name)\n"
    },
    {
        "group": "LineNr",
        "row": 131,
        "char": "131"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 131,
        "char": "    result_wrapper &#61; op_model.output_shape.serialization["
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 131,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 131,
        "char": "resultWrapper"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 131,
        "char": "&#39;\n"
    },
    {
        "group": "LineNr",
        "row": 132,
        "char": "132"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 132,
        "char": "            ]\n"
    },
    {
        "group": "LineNr",
        "row": 133,
        "char": "133"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 133,
        "char": "    response_wrapper &#61; result_wrapper.replace("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 133,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 133,
        "char": "Result"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 133,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 133,
        "char": ", "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 133,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 133,
        "char": "Response"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 133,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 133,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 134,
        "char": "134"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 134,
        "char": "    metadata &#61; op_model.metadata\n"
    },
    {
        "group": "LineNr",
        "row": 135,
        "char": "135"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 135,
        "char": "    xml_namespace &#61; metadata["
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 135,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 135,
        "char": "xmlNamespace"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 135,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 135,
        "char": "]\n"
    },
    {
        "group": "LineNr",
        "row": 136,
        "char": "136"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 136,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 137,
        "char": "137"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 137,
        "char": "    "
    },
    {
        "group": "pythonComment",
        "linkedGroup": "Comment",
        "row": 137,
        "char": "# build xml tree\n"
    },
    {
        "group": "LineNr",
        "row": 138,
        "char": "138"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 138,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 139,
        "char": "139"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 139,
        "char": "    t_root &#61; etree.Element(response_wrapper, xmlns&#61;xml_namespace)\n"
    },
    {
        "group": "LineNr",
        "row": 140,
        "char": "140"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 140,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 141,
        "char": "141"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 141,
        "char": "    "
    },
    {
        "group": "pythonComment",
        "linkedGroup": "Comment",
        "row": 141,
        "char": "# build metadata\n"
    },
    {
        "group": "LineNr",
        "row": 142,
        "char": "142"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 142,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 143,
        "char": "143"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 143,
        "char": "    t_metadata &#61; etree.Element("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 143,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 143,
        "char": "ResponseMetadata"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 143,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 143,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 144,
        "char": "144"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 144,
        "char": "    t_request_id &#61; etree.Element("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 144,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 144,
        "char": "RequestId"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 144,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 144,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 145,
        "char": "145"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 145,
        "char": "    t_request_id.text &#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 145,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 145,
        "char": "1549581b-12b7-11e3-895e-1334aEXAMPLE"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 145,
        "char": "&#39;\n"
    },
    {
        "group": "LineNr",
        "row": 146,
        "char": "146"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 146,
        "char": "    t_metadata.append(t_request_id)\n"
    },
    {
        "group": "LineNr",
        "row": 147,
        "char": "147"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 147,
        "char": "    t_root.append(t_metadata)\n"
    },
    {
        "group": "LineNr",
        "row": 148,
        "char": "148"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 148,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 149,
        "char": "149"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 149,
        "char": "    "
    },
    {
        "group": "pythonComment",
        "linkedGroup": "Comment",
        "row": 149,
        "char": "# build result\n"
    },
    {
        "group": "LineNr",
        "row": 150,
        "char": "150"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 150,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 151,
        "char": "151"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 151,
        "char": "    t_result &#61; etree.Element(result_wrapper)\n"
    },
    {
        "group": "LineNr",
        "row": 152,
        "char": "152"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 152,
        "char": "    outputs &#61; op_model.output_shape.members\n"
    },
    {
        "group": "LineNr",
        "row": 153,
        "char": "153"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 153,
        "char": "    replace_list &#61; []\n"
    },
    {
        "group": "LineNr",
        "row": 154,
        "char": "154"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 154,
        "char": "    "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 154,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 154,
        "char": " (output_name, output_shape) "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 154,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 154,
        "char": " outputs.items():\n"
    },
    {
        "group": "LineNr",
        "row": 155,
        "char": "155"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 155,
        "char": "        t_result.append(_get_subtree(output_name, output_shape,\n"
    },
    {
        "group": "LineNr",
        "row": 156,
        "char": "156"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 156,
        "char": "                        replace_list))\n"
    },
    {
        "group": "LineNr",
        "row": 157,
        "char": "157"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 157,
        "char": "    t_root.append(t_result)\n"
    },
    {
        "group": "LineNr",
        "row": 158,
        "char": "158"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 158,
        "char": "    xml_body &#61; etree.tostring(t_root, pretty_print&#61;"
    },
    {
        "group": "pythonBuiltin",
        "linkedGroup": "Identifier",
        "row": 158,
        "char": "True"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 158,
        "char": ").decode("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 158,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 158,
        "char": "utf-8"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 158,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 158,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 159,
        "char": "159"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 159,
        "char": "    xml_body_lines &#61; xml_body.splitlines()\n"
    },
    {
        "group": "LineNr",
        "row": 160,
        "char": "160"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 160,
        "char": "    "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 160,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 160,
        "char": " replace "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 160,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 160,
        "char": " replace_list:\n"
    },
    {
        "group": "LineNr",
        "row": 161,
        "char": "161"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 161,
        "char": "        name &#61; replace["
    },
    {
        "group": "pythonNumber",
        "linkedGroup": "Constant",
        "row": 161,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 161,
        "char": "]\n"
    },
    {
        "group": "LineNr",
        "row": 162,
        "char": "162"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 162,
        "char": "        prefix &#61; replace["
    },
    {
        "group": "pythonNumber",
        "linkedGroup": "Constant",
        "row": 162,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 162,
        "char": "]\n"
    },
    {
        "group": "LineNr",
        "row": 163,
        "char": "163"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 163,
        "char": "        singular_name &#61; singularize(name)\n"
    },
    {
        "group": "LineNr",
        "row": 164,
        "char": "164"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 164,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 165,
        "char": "165"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 165,
        "char": "        start_tag &#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 165,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 165,
        "char": "&lt;%s&gt;"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 165,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 165,
        "char": " % name\n"
    },
    {
        "group": "LineNr",
        "row": 166,
        "char": "166"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 166,
        "char": "        iter_name &#61; ("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 166,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 166,
        "char": "{}.{}"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 166,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 166,
        "char": ".format(prefix[-"
    },
    {
        "group": "pythonNumber",
        "linkedGroup": "Constant",
        "row": 166,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 166,
        "char": "],\n"
    },
    {
        "group": "LineNr",
        "row": 167,
        "char": "167"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 167,
        "char": "                     name.lower()) "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 167,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 167,
        "char": " prefix "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 167,
        "char": "else"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 167,
        "char": " name.lower())\n"
    },
    {
        "group": "LineNr",
        "row": 168,
        "char": "168"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 168,
        "char": "        loop_start &#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 168,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 168,
        "char": "{%% for %s in %s %%}"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 168,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 168,
        "char": " % (singular_name.lower(),\n"
    },
    {
        "group": "LineNr",
        "row": 169,
        "char": "169"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 169,
        "char": "                iter_name)\n"
    },
    {
        "group": "LineNr",
        "row": 170,
        "char": "170"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 170,
        "char": "        end_tag &#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 170,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 170,
        "char": "&lt;/%s&gt;"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 170,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 170,
        "char": " % name\n"
    },
    {
        "group": "LineNr",
        "row": 171,
        "char": "171"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 171,
        "char": "        loop_end &#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 171,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 171,
        "char": "{{ endfor }}"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 171,
        "char": "&#39;\n"
    },
    {
        "group": "LineNr",
        "row": 172,
        "char": "172"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 172,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 173,
        "char": "173"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 173,
        "char": "        start_tag_indexes &#61; [i "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 173,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 173,
        "char": " (i, l) "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 173,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 173,
        "char": " "
    },
    {
        "group": "pythonBuiltin",
        "linkedGroup": "Identifier",
        "row": 173,
        "char": "enumerate"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 173,
        "char": "(xml_body_lines)\n"
    },
    {
        "group": "LineNr",
        "row": 174,
        "char": "174"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 174,
        "char": "                             "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 174,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 174,
        "char": " start_tag "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 174,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 174,
        "char": " l]\n"
    },
    {
        "group": "LineNr",
        "row": 175,
        "char": "175"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 175,
        "char": "        "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 175,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 175,
        "char": " "
    },
    {
        "group": "pythonBuiltin",
        "linkedGroup": "Identifier",
        "row": 175,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 175,
        "char": "(start_tag_indexes) !&#61; "
    },
    {
        "group": "pythonNumber",
        "linkedGroup": "Constant",
        "row": 175,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 175,
        "char": ":\n"
    },
    {
        "group": "LineNr",
        "row": 176,
        "char": "176"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 176,
        "char": "            "
    },
    {
        "group": "pythonException",
        "linkedGroup": "Statement",
        "row": 176,
        "char": "raise"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 176,
        "char": " "
    },
    {
        "group": "pythonExceptions",
        "linkedGroup": "Type",
        "row": 176,
        "char": "Exception"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 176,
        "char": "("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 176,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 176,
        "char": "tag %s not found in response body"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 176,
        "char": "&#39;\n"
    },
    {
        "group": "LineNr",
        "row": 177,
        "char": "177"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 177,
        "char": "                            % start_tag)\n"
    },
    {
        "group": "LineNr",
        "row": 178,
        "char": "178"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 178,
        "char": "        start_tag_index &#61; start_tag_indexes["
    },
    {
        "group": "pythonNumber",
        "linkedGroup": "Constant",
        "row": 178,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 178,
        "char": "]\n"
    },
    {
        "group": "LineNr",
        "row": 179,
        "char": "179"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 179,
        "char": "        xml_body_lines.insert(start_tag_index + "
    },
    {
        "group": "pythonNumber",
        "linkedGroup": "Constant",
        "row": 179,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 179,
        "char": ", loop_start)\n"
    },
    {
        "group": "LineNr",
        "row": 180,
        "char": "180"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 180,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 181,
        "char": "181"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 181,
        "char": "        end_tag_indexes &#61; [i "
    },
    {
        "group": "pythonRepeat",
        "linkedGroup": "Statement",
        "row": 181,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 181,
        "char": " (i, l) "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 181,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 181,
        "char": " "
    },
    {
        "group": "pythonBuiltin",
        "linkedGroup": "Identifier",
        "row": 181,
        "char": "enumerate"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 181,
        "char": "(xml_body_lines)\n"
    },
    {
        "group": "LineNr",
        "row": 182,
        "char": "182"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 182,
        "char": "                           "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 182,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 182,
        "char": " end_tag "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 182,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 182,
        "char": " l]\n"
    },
    {
        "group": "LineNr",
        "row": 183,
        "char": "183"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 183,
        "char": "        "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 183,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 183,
        "char": " "
    },
    {
        "group": "pythonBuiltin",
        "linkedGroup": "Identifier",
        "row": 183,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 183,
        "char": "(end_tag_indexes) !&#61; "
    },
    {
        "group": "pythonNumber",
        "linkedGroup": "Constant",
        "row": 183,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 183,
        "char": ":\n"
    },
    {
        "group": "LineNr",
        "row": 184,
        "char": "184"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 184,
        "char": "            "
    },
    {
        "group": "pythonException",
        "linkedGroup": "Statement",
        "row": 184,
        "char": "raise"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 184,
        "char": " "
    },
    {
        "group": "pythonExceptions",
        "linkedGroup": "Type",
        "row": 184,
        "char": "Exception"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 184,
        "char": "("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 184,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 184,
        "char": "tag %s not found in response body"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 184,
        "char": "&#39;\n"
    },
    {
        "group": "LineNr",
        "row": 185,
        "char": "185"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 185,
        "char": "                            % end_tag)\n"
    },
    {
        "group": "LineNr",
        "row": 186,
        "char": "186"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 186,
        "char": "        end_tag_index &#61; end_tag_indexes["
    },
    {
        "group": "pythonNumber",
        "linkedGroup": "Constant",
        "row": 186,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 186,
        "char": "]\n"
    },
    {
        "group": "LineNr",
        "row": 187,
        "char": "187"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 187,
        "char": "        xml_body_lines.insert(end_tag_index, loop_end)\n"
    },
    {
        "group": "LineNr",
        "row": 188,
        "char": "188"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 188,
        "char": "    xml_body &#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 188,
        "char": "&#39;"
    },
    {
        "group": "pythonEscape",
        "linkedGroup": "Special",
        "row": 188,
        "char": "\\n"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 188,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 188,
        "char": ".join(xml_body_lines)\n"
    },
    {
        "group": "LineNr",
        "row": 189,
        "char": "189"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 189,
        "char": "    body &#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 189,
        "char": "&#39;"
    },
    {
        "group": "pythonEscape",
        "linkedGroup": "Special",
        "row": 189,
        "char": "\\n"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 189,
        "char": "{}_TEMPLATE &#61; &quot;&quot;&quot;{}&quot;&quot;&quot;"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 189,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 189,
        "char": ".format(operation.upper(),\n"
    },
    {
        "group": "LineNr",
        "row": 190,
        "char": "190"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 190,
        "char": "            xml_body)\n"
    },
    {
        "group": "LineNr",
        "row": 191,
        "char": "191"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 191,
        "char": "    "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 191,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 191,
        "char": " body\n"
    },
    {
        "group": "LineNr",
        "row": 192,
        "char": "192"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 192,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 193,
        "char": "193"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 193,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 194,
        "char": "194"
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 194,
        "char": "def"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 194,
        "char": " "
    },
    {
        "group": "pythonFunction",
        "linkedGroup": "Identifier",
        "row": 194,
        "char": "get_escaped_service"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 194,
        "char": "(service):\n"
    },
    {
        "group": "LineNr",
        "row": 195,
        "char": "195"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 195,
        "char": "    "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 195,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 195,
        "char": " service.replace("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 195,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 195,
        "char": "-"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 195,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 195,
        "char": ", "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 195,
        "char": "&#39;&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 195,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 196,
        "char": "196"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 196,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 197,
        "char": "197"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 197,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 198,
        "char": "198"
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 198,
        "char": "def"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 198,
        "char": " "
    },
    {
        "group": "pythonFunction",
        "linkedGroup": "Identifier",
        "row": 198,
        "char": "get_lib_dir"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 198,
        "char": "(service):\n"
    },
    {
        "group": "LineNr",
        "row": 199,
        "char": "199"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 199,
        "char": "    "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 199,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 199,
        "char": " os.path.join("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 199,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 199,
        "char": "moto"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 199,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 199,
        "char": ", get_escaped_service(service))\n"
    },
    {
        "group": "LineNr",
        "row": 200,
        "char": "200"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 200,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 201,
        "char": "201"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 201,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 202,
        "char": "202"
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 202,
        "char": "def"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 202,
        "char": " "
    },
    {
        "group": "pythonFunction",
        "linkedGroup": "Identifier",
        "row": 202,
        "char": "get_test_dir"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 202,
        "char": "(service):\n"
    },
    {
        "group": "LineNr",
        "row": 203,
        "char": "203"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 203,
        "char": "    "
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 203,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 203,
        "char": " os.path.join("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 203,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 203,
        "char": "tests"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 203,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 203,
        "char": ",\n"
    },
    {
        "group": "LineNr",
        "row": 204,
        "char": "204"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 204,
        "char": "                        "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 204,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 204,
        "char": "test_{}"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 204,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 204,
        "char": ".format(get_escaped_service(service)))\n"
    },
    {
        "group": "LineNr",
        "row": 205,
        "char": "205"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 205,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 206,
        "char": "206"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 206,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 207,
        "char": "207"
    },
    {
        "group": "pythonDecorator",
        "linkedGroup": "PreProc",
        "row": 207,
        "char": "@"
    },
    {
        "group": "pythonDecoratorName",
        "linkedGroup": "Identifier",
        "row": 207,
        "char": "click.command"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 207,
        "char": "()\n"
    },
    {
        "group": "LineNr",
        "row": 208,
        "char": "208"
    },
    {
        "group": "pythonStatement",
        "linkedGroup": "Statement",
        "row": 208,
        "char": "def"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 208,
        "char": " "
    },
    {
        "group": "pythonFunction",
        "linkedGroup": "Identifier",
        "row": 208,
        "char": "main"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 208,
        "char": "():\n"
    },
    {
        "group": "LineNr",
        "row": 209,
        "char": "209"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 209,
        "char": "    (service, operation) &#61; select_service_and_operation()\n"
    },
    {
        "group": "LineNr",
        "row": 210,
        "char": "210"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 210,
        "char": "    api_protocol &#61; "
    },
    {
        "group": "pythonEscape",
        "linkedGroup": "Special",
        "row": 210,
        "char": "\\\n"
    },
    {
        "group": "LineNr",
        "row": 211,
        "char": "211"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 211,
        "char": "        boto3.client(service)._service_model.metadata["
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 211,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 211,
        "char": "protocol"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 211,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 211,
        "char": "]\n"
    },
    {
        "group": "LineNr",
        "row": 212,
        "char": "212"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 212,
        "char": "    initialize_service(service, operation, api_protocol)\n"
    },
    {
        "group": "LineNr",
        "row": 213,
        "char": "213"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 213,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 214,
        "char": "214"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": "    "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 214,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": " api_protocol "
    },
    {
        "group": "pythonOperator",
        "linkedGroup": "Statement",
        "row": 214,
        "char": "in"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": " ["
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 214,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 214,
        "char": "query"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 214,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": ", "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 214,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 214,
        "char": "json"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 214,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": ", "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 214,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 214,
        "char": "rest-json"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 214,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": "]:\n"
    },
    {
        "group": "LineNr",
        "row": 215,
        "char": "215"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 215,
        "char": "        insert_codes(service, operation, api_protocol)\n"
    },
    {
        "group": "LineNr",
        "row": 216,
        "char": "216"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 216,
        "char": "    "
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 216,
        "char": "else"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 216,
        "char": ":\n"
    },
    {
        "group": "LineNr",
        "row": 217,
        "char": "217"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 217,
        "char": "        print_progress("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 217,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 217,
        "char": "skip inserting code"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 217,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 217,
        "char": ",\n"
    },
    {
        "group": "LineNr",
        "row": 218,
        "char": "218"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 218,
        "char": "                       "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 218,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 218,
        "char": "api protocol &quot;{}&quot; is not supported"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 218,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 218,
        "char": ".format(api_protocol),\n"
    },
    {
        "group": "LineNr",
        "row": 219,
        "char": "219"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 219,
        "char": "                       "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 219,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 219,
        "char": "yellow"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 219,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 219,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 220,
        "char": "220"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 220,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 221,
        "char": "221"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 221,
        "char": "    click.echo("
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 221,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 221,
        "char": "You will still need to add the mock into &quot;__init__.py&quot;"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 221,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 221,
        "char": ".format(service))\n"
    },
    {
        "group": "LineNr",
        "row": 222,
        "char": "222"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 222,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 223,
        "char": "223"
    },
    {
        "group": "pythonConditional",
        "linkedGroup": "Statement",
        "row": 223,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 223,
        "char": " __name__ &#61;&#61; "
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 223,
        "char": "&#39;"
    },
    {
        "group": "pythonString",
        "linkedGroup": "Constant",
        "row": 223,
        "char": "__main__"
    },
    {
        "group": "pythonQuotes",
        "linkedGroup": "Constant",
        "row": 223,
        "char": "&#39;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 223,
        "char": ":\n"
    },
    {
        "group": "LineNr",
        "row": 224,
        "char": "224"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 224,
        "char": "    main()"
    }
]