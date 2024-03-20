const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://ec2-3-229-105-151.compute-1.amazonaws.com:8080/',
    changeOrigin: true,
})
);
};