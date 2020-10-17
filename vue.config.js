module.exports = {
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // modify the options...
        options.compilerOptions.whitespace = 'preserve';
        return options;
      });
  },
  publicPath: process.env.NODE_ENV === 'production' ?
  process.env.PUBLIC_PATH : '/'
};