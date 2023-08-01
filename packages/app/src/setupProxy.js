const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_HOST || 'http://localhost:8000',
      // target: process.env.REACT_APP_API_HOST || 'https://xh7q4y8tk4.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
