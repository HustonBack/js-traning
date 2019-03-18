const WebFragment = require('./class');

class Button extends WebFragment{
    get name() {
        return this._name;
    }
    constructor(locator, name) {
        super(locator);
        this._name = name;
    }

    click() {
        console.log(`You clicked on button with name ${this._name}`);
    }

    scrollTo() {
        console.log(`You scrolled into button with name ${this._name}`);
    }

}

module.exports = Button;
