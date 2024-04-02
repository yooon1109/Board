const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://ec2-52-79-215-156.ap-northeast-2.compute.amazonaws.com:8080/',
            changeOrigin: true,
})
);
};