<template>
  <div>
    <Header />
    <!-- TODO: 119321 -->
    <!-- <Content /> -->
    <Top />
    <Footer />
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'
import Top from '@theme/components/Top.vue'

export default {
  components: { Header,Footer, Top },
}
</script>
