<template>
  <div>
    <Header />

    <SearchBox />

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
import SearchBox from '@theme/components/SearchBox'

export default {
  components: { Header,Footer, Top, SearchBox },

  data() {
    return {
      isTopPage: false
    };
  },

  methods: {
    validateTopPageURL() {
      return location.pathname.match('^\/help\/(ja|en)\/?$') != null;
    }
  },

  mounted() {
    this.isTopPage = this.validateTopPageURL()
  },

  watch: {
    $route() {
      this.isTopPage = this.validateTopPageURL();
    },
  },
}
</script>
