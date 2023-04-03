const { resolve } = require('path');

module.exports = options => ({
  define () {
    return {
      BASEURL: options.baseURL || '',
      STRIPURL: options.stripExtension || false,
    }
  },
  enhanceAppFiles () {
    return [resolve(__dirname, 'enhanceAppFile.js')]
  },
  globalUIComponents: ['Canonical']
})
