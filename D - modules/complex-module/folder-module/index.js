const { anotherStuff } = require('./sub-module');

module.exports = {
    doSomething: () => {
        console.log(anotherStuff() + 2)
    }
};
