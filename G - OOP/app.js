const WebFragment = require('./class');

const fragment = new WebFragment('blabla', true);
const fragment2 = new WebFragment('block', false);

// console.log(fragment._locator);
// console.log(fragment._flag);
// console.log('-------------');
// console.log(fragment2._locator);
// console.log(fragment2._flag);


console.log(fragment.locator);
fragment.locator = 'new blabla';
fragment.setLocator('very new bla bla');
console.log(fragment.locator);








// const Button = require('./inheritance');

// console.log(fragment.locator);
// fragment.scrollTo();
// const fragment = new WebFragment('.block');
// const button = new Button('.button', 'submit');
//
//
// console.log(fragment.locator);
// console.log(button.locator);
//
// fragment.scrollTo();
// button.scrollTo();
