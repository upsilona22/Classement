exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    'content-type': 'application/json',
    body: JSON.stringify({
    "1": {
        "Name": "JOJO",
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
    "708235443875086379": {
        "Name": "blanco2wishhh",
        "Demolitions": 15,
        "Exterminations": 1,
        "LastUpdate": "2023-02-23T14:08:25.643Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 15,
                "Exterminations": 1,
                "Time": "2023-02-23T14:08:25.643Z"
            }
        ]
    }
})
  };
}
