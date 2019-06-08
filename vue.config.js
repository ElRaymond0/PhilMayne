module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/PhilMayne/'
      : '/',
    assetsDir: process.env.NODE_ENV === 'production'
    ? '/PhilMayne/'
    : '',
  }