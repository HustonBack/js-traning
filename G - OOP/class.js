class WebFragment {

   constructor(locator) {
       this._locator = locator
   }

   get locator() {
        return this._locator;
   }

   scrollTo() {
       console.log(`Scrolled to element with locator ${this.locator}`)
   }

   getText() {
       return 'random text'
   }
}

module.exports = WebFragment;

