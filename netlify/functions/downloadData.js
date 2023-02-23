exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    'content-type': 'application/json',
    body: JSON.stringify({
    "1": {
        "Name": "JOJO",
        "Demolitions": 3685,
        "Exterminations": 16,
        "LastUpdate": "2023-02-09T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3685,
                "Exterminations": 16,
                "Time": "2023-02-09T00:00:00.000"
            }
        ]
    },
    "775654181167562752": {
        "Name": "upsilon",
        "Demolitions": 10100,
        "Exterminations": 102,
        "LastUpdate": "2023-02-23T09:52:19.900Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12,
                "Exterminations": 1,
                "Time": "2023-02-23T09:44:50.650Z"
            },
            {
                "Demolitions": 10004,
                "Exterminations": 98,
                "Time": "2023-02-23T09:52:04.786Z"
            },
            {
                "Demolitions": 10100,
                "Exterminations": 102,
                "Time": "2023-02-23T09:52:19.900Z"
            }
        ]
    }
})
  };
}
