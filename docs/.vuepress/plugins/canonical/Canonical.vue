<template></template>

<script>
/* global BASEURL */
/* global STRIPURL */
/* global EXCLUDE_PATH_PATTERN */
export default {
  created() {
    const isExcludePath = EXCLUDE_PATH_PATTERN != undefined
      ? RegExp(EXCLUDE_PATH_PATTERN).test(this.$page.path)
      : false;

    if (typeof this.$ssrContext !== "undefined" && !isExcludePath) {
      this.$ssrContext.userHeadTags += `<link rel='canonical' href='${this.computeURL()}'/>`;
    }
  },

  methods: {
    computeURL() {
      let pagePath = STRIPURL
        ? this.$page.path.replace(/\.html$/, "")
        : this.$page.path;
      return BASEURL + pagePath;
    }
  }
};
</script>
