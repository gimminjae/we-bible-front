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
  app.use(
    "/dev/bible",
    createProxyMiddleware({
      target: "https://u0bcvttz8k.execute-api.ap-northeast-2.amazonaws.com",
      changeOrigin: true,
      pathRewrite: {
        "^/": "/dev/bible/",
      },
    })
  );
};
