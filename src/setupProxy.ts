// @ts-ignore
const {createProxyMiddleware}: any = require("http-proxy-middleware");

module.exports = function (app: any) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_BO_API_URL,
      changeOrigin: true,
      pathRewrite: {
        "^/": "/api/",
      },
      // autoRewrite: true,
    })
  );
};