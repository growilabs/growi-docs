<template></template>

<script>
/* global BASE_URL */
/* global EXCLUDE_PATH_PATTERN */
export default {
  created() {
    const pagePath = this.$page.path

    const isExcludePath = EXCLUDE_PATH_PATTERN != undefined
      ? RegExp(EXCLUDE_PATH_PATTERN).test(pagePath)
      : false;

    if (typeof this.$ssrContext !== "undefined" && !isExcludePath) {
      const computeURL = BASE_URL + pagePath;
      this.$ssrContext.userHeadTags += `<link rel='canonical' href='${computeURL}'/>`;
    }
  },
};
</script>
