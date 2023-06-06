<template>
  <div>
    <Header />
      <div v-if="isTopPage">
        <Top />
      </div>
      <div v-else class="bg-cloud right-flip py-5">
        <div class="container" id="header">
          <div class="row">
            <h1 class="col-8 fs-2 mb-0 text-dark fw-bold">GROWI.cloud ヘルプページ</h1>
            <!-- TODO:検索ができるようにする -->
            <div class="col-4 row">
              <p class="col-9 bg-white py-2 my-auto me-2">search</p>
              <a class="btn btn-primary col-2"><i class="fa fa-search" /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="cloud-help-bg">
        <div class="container py-5">
          <!-- TODO:対応するが表示されるようにする -->
          <p>
            <i class="fa fa-home me-2" />
              <i class="fa fa-angle-right me-2" />
            <a class="me-2">helpTop</a>
            <i class="fa fa-angle-right me-2" />
            <a>page</a>
          </p>
          <Content />
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
  }
}
</script>

>
<style scoped>

/* TODO:scssにして変数にしたい */
/* $light-blue: #EDF9FF; */

.bg-cloud {
  background-color: #EDF9FF;
  background-image: url('/assets/images/cloud-background-abstract-left.png'),url('/assets/images/cloud-background-abstract-right.png');
  background-repeat: no-repeat;
  background-position: left -50% bottom -3vw,right -50% bottom -3vw;
  background-size: 50%;
}

</style>
