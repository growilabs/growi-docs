<template>
  <div>
    <Header />

    <SearchBox />

    <div v-if="isTopPage">
      <Top />
    </div>

    <div v-else>
      <!-- TODO Article component にまとめる -->
        <div class="container py-5">
        <p class="text-muted d-none d-md-block">
          <a href="https://growi.cloud/" class="fa fa-house me-2 text-muted"/>
          <i class="fa fa-angle-right me-2" />
          <router-link :to="`/${this.$lang}`" class="me-2 text-decoration-none text-muted">{{ this.$themeLocaleConfig.help_top }}</router-link >
          <i class="fa fa-angle-right me-2" />
          <a>{{ this.$page.title }}</a>
        </p>
        <Content />
      </div>
      <!-- TODO Article component にまとめる -->
  </div>
  <Footer />
  </div>
</template>


<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer.vue'
import Top from '@theme/components/Top.vue'
import SearchBox from '@theme/components/SearchBox'

export default {
  components: { Header, Footer, Top, SearchBox },

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
