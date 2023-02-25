exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    'content-type': 'application/json',
    body: JSON.stringify({
    "1": {
        "Name": "BOT",
        "Demolitions": 10,
        "Exterminations": 1,
        "LastUpdate": "2023-02-09T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10,
                "Exterminations": 1,
                "Time": "2023-02-09T00:00:00.000"
            }
        ]
    },
    "325920058146816000": {
        "Name": "FuriousPanda",
        "Demolitions": 138017,
        "Exterminations": 10697,
        "LastUpdate": "2023-02-25T12:33:33.028Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 14000,
                "Exterminations": 1,
                "Time": "2023-02-25T12:33:33.028Z"
            }
        ],
        "Country": "FRA"
    }
})
  };
}
