<template>
  <div class="embed-container">
    <object
      class="embed"
      :data="src"
      >
    </object>
  </div>
</template>

<script>
/**
 * @see https://github.com/dkebler/vuepress/tree/api/lib/default-theme
 */
export default {
  props: [
    'src',
  ],
  methods: {
    toggleBodyClass (addRemoveClass, className) {
      const el = document.body
      if (addRemoveClass === 'add') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    }
  },
  mounted () {
    this.toggleBodyClass('add', 'no-scroll')
  },
  destroyed () {
    this.toggleBodyClass('remove', 'no-scroll')
  }
}
</script>

<style lang="stylus">
@import '~@vuepress/core/lib/app/style/config.styl';

.no-scroll {
  overflow-y: hidden;
}
</style>

<style lang="stylus" scoped>

.embed-container {
  display: flex;

  .embed {
    flex-grow: 1;
    align-content: stretch;
    align-items: flex-start;

    height: 'calc(100vh - %s)' % $navbarHeight;
  }
  @media (max-width: $MQMobile) {
    .embed {
      flex-direction: column;
    }
  }
}

</style>
