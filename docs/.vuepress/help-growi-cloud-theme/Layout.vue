<template>
  <div>
    <Header />
      <div v-if="isTopPage">
        <Top />
      </div>
      <div v-else>
        <Content />
      </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'
import Top from '@theme/components/Top.vue'

export default {
  components: { Header,Footer, Top },
  data() {
    return {
      isTopPage: false
    };
  },
  mounted() {
    if (location.pathname.match('^\/help\/(ja|en)\/?$')) {
      this.isTopPage = true
    }
  }
}
</script>
