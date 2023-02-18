const fileType = require('file-type');

exports.handler = async () => {
 
  // Use a PDF
  const file = 'hhttps://www.dropbox.com/s/lxvr2j4r51bi5xx/leaderboard.json?dl=0'
  // Or even an iamge
  //const file = 'https://example.com/sample.jpg'
  
  const response = await fetch(file);
  const status_code = response.status
  const content_type = response.headers.get('content-type')
  const buffer = await response.buffer();
  const type = await fileType.fromBuffer(buffer)

  return {
    statusCode: status_code,
    headers: {
      'Content-Type': content_type,
    },
    isBase64Encoded: true,
    body: buffer.toString('base64')
  }
}
