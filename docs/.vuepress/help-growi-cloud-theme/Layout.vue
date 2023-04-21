<template>
  <div>
    <GcHeader />
    <!-- TODO: 119321 -->
    <!-- <Content /> -->
    <Top />
    <GcFooter />
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'
import Top from '@theme/components/Home.vue'

export default {
  components: { Header,Footer, Top },
}
</script>
