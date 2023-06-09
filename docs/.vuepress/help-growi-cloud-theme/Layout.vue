<template>
  <div>
    <Header />
      <div v-if="isTopPage">
        <Top />
      </div>
      <div v-else>
        <div class="container py-5">
          <!-- TODO Article component にまとめる -->
          <p class="text-muted d-none d-md-block">
            <a href="https://growi.cloud/" class="fa fa-house me-2 text-muted"/>
            <i class="fa fa-angle-right me-2" />
            <!-- TODO: i18n -->
            <a :href="`/help/${this.$lang}/`" class="me-2 text-decoration-none text-muted">ヘルプトップ</a>
            <i class="fa fa-angle-right me-2" />
            <a>{{ this.$page.title }}</a>
          </p>
          <Content />
          <!-- TODO Article component にまとめる -->
        </div>
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
  },
}
</script>
