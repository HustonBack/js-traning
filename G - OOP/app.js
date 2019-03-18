const WebFragment = require('./class');
const Button = require('./inheritance');

const fragment = new WebFragment('.block');
const button = new Button('.button', 'submit');


console.log(fragment.locator);
console.log(button.locator);

fragment.scrollTo();
button.scrollTo();
