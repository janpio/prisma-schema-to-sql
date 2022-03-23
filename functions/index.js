exports.handler = async function (event, context, callback) {
  let body = "foo"
  return {
    statusCode: 200,
    body: body,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}