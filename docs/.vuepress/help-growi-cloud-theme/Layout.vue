<template>
  <div>
    <Header />
      <div v-if="isTopPage">
        <Top />
      </div>
      <div v-else class="bg-cloud right-flip py-5">
        <div class="container" id="header">
          <div class="row">
            <h1 class="col-8 fs-2 mb-0 fw-bold">
              <a href="/help/ja" class="text-dark text-decoration-none">
                GROWI.cloud ヘルプページ
              </a>
            </h1>
            <div class="col-4">
                <!-- TODO:検索ができるようにする -->
              <form class="d-flex">
                <input class="form-control py-2 my-auto me-2" type="search" name="search" placeholder="ヘルプページ内検索"/>
                <!-- TODO:ボタンの色や調整をする -->
                <a class="btn btn-primary d-flex align-items-center px-4"><i class="fa fa-search" /></a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="cloud-help-bg">
        <div class="container py-5">
          <!-- TODO:対応するがパンくずリストが表示されるようにする -->
          <p class="text-muted">
            <i class="fa fa-house me-2" />
              <i class="fa fa-angle-right me-2" />
            <a class="me-2 text-decoration-none text-muted">helpTop</a>
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
