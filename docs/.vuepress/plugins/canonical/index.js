// This is a fork of: https://github.com/IOriens/vuepress-plugin-canonical
// Insert canonical tags into any page during build time.

const { resolve } = require('path');

module.exports = options => ({
  define () {
    return {
      BASE_URL: options.baseURL || '',
      EXCLUDE_PATH_PATTERNS: options.excludePathPatterns || undefined,
    }
  },
  enhanceAppFiles () {
    return [resolve(__dirname, 'enhanceAppFile.js')]
  },
  globalUIComponents: ['Canonical']
})
