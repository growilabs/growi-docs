// sse https://github.com/vuejs/vuepress/issues/2112

<template>
  <div>
    <slot v-if="$themeConfig.context === this.context"></slot>
  </div>
</template>

<script>
export default {
  props: {
    context: String
  },

  mounted() {
    const isSupported = this.context === 'docs-growi-org' || this.context === 'help-growi-cloud'
    if (!isSupported) {
      console.error(`${this.context} is not supported`);
    }
  },
}
</script>
