<template>
  <div class="theme-container">
    <div class="content">
      <h1>404 Not Found</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/" class="action-button">
        Visit {{ $siteTitle }} Home →
      </router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]
export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="stylus">
@import '~@vuepress/core/lib/client/style/config.styl';

.action-button
  display inline-block
  font-size 1.0rem
  color #fff
  background-color $accentColor
  padding 0.8rem 0.8rem
  border-radius 4px
  transition background-color .1s ease
  box-sizing border-box
  border-bottom 1px solid darken($accentColor, 10%)
  &:hover
    background-color lighten($accentColor, 10%)
</style>
