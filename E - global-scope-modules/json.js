

// { foo: '' }
// { "foo": "" }
// JSON => string
// JSON => string, number, boolean, null, array, object
// function

// JSON.parse('sfngkbsdgvlkhjbsgk');

const jsonString = `{ "key1": "valuefgsjhbgrvj srgv", "key2": "value2" }`;
const object = JSON.parse(jsonString);
// console.log(object);

const convertable = {
  number: 1,
  string: 'some',
  boolean: true,
  void: null
};

const notConvertable = {
    number: 1,
    string: 'some',
    boolean: true,
    invalid: JSON.parse,
    void: null,
};

// JSON.stringify(convertable);
console.log(JSON.stringify(notConvertable));
