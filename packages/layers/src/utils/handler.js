const jsonResponse = (status, body) => {
  return {
    statusCode: status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    body: JSON.stringify(body),
  }
}

const handleWrapper = function (fn) {
  const res = {
    json: jsonResponse
  }
  return async function (event, context) {
    const { requestContext } = event?.requestContext ?? {}
    const { claims } = requestContext?.authorizer?.jwt ?? { claims: { sub: 'local-user' } }
    try {
      return await fn(event, { ...context, user: claims }, res);
    } catch (error) {
      console.log('error', { error, event });
    }
  }
}

module.exports = {
  handleWrapper
}