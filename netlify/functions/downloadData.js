exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    'content-type': 'application/json',
    body: JSON.stringify({
    "1": {
        "Name": "BOT",
        "Demolitions": 1,
        "Exterminations": 0,
        "LastUpdate": "2023-02-09T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1,
                "Exterminations": 0,
                "Time": "2023-02-09T00:00:00.000"
            }
        ]
    }
})
  };
}
