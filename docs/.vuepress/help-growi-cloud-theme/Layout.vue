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
  methods: {
    validateTopPageURL() {
      console.log(this.route);
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
