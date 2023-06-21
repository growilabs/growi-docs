<template>
  <div>
    <Header />

    <SearchBox />

    <div v-if="isTopPage">
      <Top />
    </div>

    <div v-else>
      <Article />
    </div>

    <Footer />
  </div>
</template>


<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer.vue'
import Top from '@theme/components/Top.vue'
import Article from '@theme/components/Article';
import SearchBox from '@theme/components/SearchBox'

export default {
  components: { Header, Footer, Top, Article, SearchBox },

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
