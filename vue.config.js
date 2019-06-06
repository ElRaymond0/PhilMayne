module.exports = env => {
    return {
        publicPath: --env.NODE_ENV === 'production'
        ? '/PhilMayne/'
        : '/'
    }
  }