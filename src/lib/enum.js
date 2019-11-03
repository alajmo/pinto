export { Enum };

function Enum(...arr) {
  const enums = arr.reduce((prev, cur) => ({ ...prev, [cur]: cur }), {});

  const handler = {
    get(target, name) {
      if (typeof target[name] != 'undefined') {
        return target[name];
      }

      throw new Error(`No such enumerator: ${name}`);
    },

    set() {
      throw new Error(
        'Cannot add/update properties on an Enum instance after it is defined',
      );
    },
  };

  return new Proxy(enums, handler);
}
