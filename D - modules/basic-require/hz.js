console.log('Importing ...');
// .... ///
const privateValue = 'I am hidden to another modules';

function internal() {

}

const pt = () => {
    return {
        locator: '',
        text: '',
        click: () => {}
    }
};

module.exports = {
    priceTicketComponent: pt,
    header: () => {
        return {
            navigate: () => {

            }
        }
    }
};
