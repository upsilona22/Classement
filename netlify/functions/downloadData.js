exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    'content-type': 'application/json',
    body: JSON.stringify({message: "Hello World"})
  };
}
