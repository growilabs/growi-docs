module.exports = ({canonicalBase, excludePathPatterns} = {}) => ({
  extendPageData({ frontmatter, path }) {

    const isExcludePath = excludePathPatterns != null
      ? excludePathPatterns
          .map(p => RegExp(p).test(path))
          .some(t => t === true)
      : false;

    if (!isExcludePath) {
      frontmatter.canonicalUrl = canonicalBase + path
    }
  },
})


