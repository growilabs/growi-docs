<template></template>

<script>
/* global BASE_URL */
/* global EXCLUDE_PATH_PATTERNS */
export default {
  created() {
    const isExcludePath = this.isExcludePath();

    if (typeof this.$ssrContext !== "undefined" && !isExcludePath) {
      const computeURL = BASE_URL + this.$page.path;
      this.$ssrContext.userHeadTags += `<link rel='canonical' href='${computeURL}'/>`;
    }
  },

  methods: {
    isExcludePath() {
      if (EXCLUDE_PATH_PATTERNS == undefined) {
        return false;
      }

      const result = EXCLUDE_PATH_PATTERNS.map(p => RegExp(p).test(this.$page.path));
      return result.some(r => r === true);
    },
  }


};
</script>
