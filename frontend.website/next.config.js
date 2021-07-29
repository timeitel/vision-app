const ghPagesPathing =
  process.env.NODE_ENV === "production"
    ? { assetPrefix: "/vision-app/./", basePath: "/vision-app/." }
    : {};

module.exports = {
  ...ghPagesPathing,
  exportTrailingSlash: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
