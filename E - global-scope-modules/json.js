const jsonString = `{ "key1": "value1", "key2": "value2" }`;

const {key1, key2} = JSON.parse(jsonString);
console.log(key1, key2);

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

JSON.stringify(convertable);
console.log(JSON.stringify(notConvertable));
