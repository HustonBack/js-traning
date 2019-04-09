class WebFragment {

    constructor(locator, flag) {
        this._locator = locator;
        this._flag = flag;
    }
    //
    // get locator() {
    //     console.log('Inside getter');
    //      return this._locator;
    // }

    set locator(locator) {
        locator += 'secret';
        this._locator = locator;
    }

    setLocator(locator) {
        this._locator = locator;
    }

    // scrollTo() {
    //     console.log(`Scrolled to element with locator ${this.locator}`)
    // }
    //
    // getText() {
    //     return 'random text'
    // }
}

module.exports = WebFragment;

