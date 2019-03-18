const request = require('request-promise-native');


(
    async () => {
        const response = await request.get({
            uri: 'https://neckermann.nl/api/packages',
            json: true
        });
        console.log(response.items);

        const responseMeta = await request.post({
            uri: 'https://neckermann.nl/api/meta/search',
            body: {
                "entities" : [
                    {"type":"AIRPORTS","limit":50}
                ],
                "query":{
                    "constraints": {
                        "entityType":"DESTINATIONS",
                        "ids": ["any"]
                    },
                    "popular":true
                }
            },
            json: true
        });
        console.log(responseMeta);
    }
)();

