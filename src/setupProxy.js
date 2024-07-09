// @ts-ignore
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // app.use(
  //   "/api",
  //   createProxyMiddleware({
  //     target: process.env.REACT_APP_BO_API_URL,
  //     changeOrigin: true,
  //     pathRewrite: {
  //       "^/": "/api/",
  //     },
  //     // autoRewrite: true,
  //   })
  // );
  app.use(
    "/bible",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/": "/bible",
      },
    })
  );
  app.use(
    "/ex-bible",
    createProxyMiddleware({
      target: "https://cdn.jsdelivr.net",
      changeOrigin: true,
      // pathRewrite: {
      //   "^/": "/gh/wldeh",
      // },
    })
  );
};