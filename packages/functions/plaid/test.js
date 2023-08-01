const { handleWrapper } = require(`${process.env.LAYER_PATH}/utils`);

module.exports.handler = handleWrapper((event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    body: JSON.stringify({
        event,
        context,
        env: process.env
    })
  };
});
