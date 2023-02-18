const fetch = require('node-fetch')

exports.handler = async (event, context) => {

    const img_url = "https://www.dropbox.com/s/lxvr2j4r51bi5xx/leaderboard.json?dl=0"

    return fetch(img_url)
        .then(res => res.buffer())
        .then((buffer) => ({
            statusCode: 200,
            headers: {'Content-Type': 'image/jpeg'},
            isBase64Encoded: true,
            body: buffer.toString('base64'),
        }))
}
