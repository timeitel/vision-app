module.exports = {
  assetPrefix: "/vision-app/",
  basePath: "/vision-app",
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
