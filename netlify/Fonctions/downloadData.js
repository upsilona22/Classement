const fetch = require('isomorphic-fetch');
const Dropbox = require('dropbox').Dropbox;

exports.handler = async function(event, context) {
    try {
        const response = await dbx.filesDownload({path: "https://www.dropbox.com/s/lxvr2j4r51bi5xx/"});

        if (response.status !== 200) {
            return {
                statusCode: response.status,
                message: "Dropbox error"
            }
        }

        const data = JSON.parse(response.result.fileBinary);

        return {
            statusCode: 200,
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }
    } catch(err) {
        console.log(err)
        return {
            statusCode: 502,
            message: "Error connecting to dropbox"
        }
    }
}
