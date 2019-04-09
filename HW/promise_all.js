const request = require('request-promise-native');

//Home Task #1
const postRequest1 = async () => {
    const post1 = await request.post({
            uri: 'https://www.neckermann.be/api/meta/search',
            body:  {
                "entities": [{"type":"AIRPORTS"}],
                "ids":["0"]
            },
            json: true
        }
    );
    console.log('Request 1', JSON.stringify(post1, null, 2));
};




public static deletePromoCode(promoCodeName) {
    return new WebApiRequest(`${this.promotionPath}/${promoCodeName}`)
        .method('DELETE')
        .baseUrl(this.PROMO_CODE_BASE_URL)
        .queryParameters({ criteria: `promotionCode=${promoCodeName}` })
        .headers(this.headerObj)
        .send();
}




const postRequest2 = async () => {
    const post2 = await request.post({
            uri: 'https://neckermann.nl/api/meta/search?packageId=H5649673058',
            body: {
                entities: [{"type": "DESTINATIONS"}],
                ids: ["any"]
            },
            queryParameters: {
                packageId: 'H5649673058'
            },
            json: true
        }
    );


    const { title } = post2.destinations[0];
    const response = await request.post({
            uri: 'https://www.neckermann.be/api/meta/search',
            body:  {
                "entities": [{"type":"AIRPORTS"}],
                "ids":[title]
            },
            json: true
        }
    );

    console.log(response);
    // console.log('Request 2', JSON.stringify(post2, null, 2));
};

const postArr = [postRequest2()];

(
    async () => {
        // try {
            await Promise.all(postArr);
        // } catch (e) {
        //     console.log(e)
        // }

    }
)();


//Home task #2
// console.log(JSON.stringify(convertable, null, 2));

