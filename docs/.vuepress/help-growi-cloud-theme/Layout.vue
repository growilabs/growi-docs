<template>
  <div>
    <Header />
      <div v-if="isTopPage">
        <Top />
      </div>
      <div v-else class="bg-cloud right-flip py-5">
        <div class="container" id="header">
          <div class="row">
            <h1 class="col-12 col-md-8 fs-2 border-0 mb-4 mb-md-0 pb-0 fw-bold text-center text-md-start">
              <a href="/help/ja" class="text-blue-dark text-decoration-none">
                GROWI.cloud ヘルプページ
              </a>
            </h1>
            <div class="col-11 col-md-4 mx-auto">
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
        <div class="container px-3 px-md-auto py-5">
          <!-- TODO:対応するパンくずリストが表示されるようにする -->
          <p class="text-muted d-none d-md-block">
            <i class="fa fa-house me-2" />
              <i class="fa fa-angle-right me-2" />
            <a class="me-2 text-decoration-none text-muted">helpTop</a>
            <i class="fa fa-angle-right me-2" />
            <a>page</a>
          </p>
            <Content class="article" />
          <div class="text-center fw-bold return">
            <a href="/help/ja" class="fs-4 text-decolation-none text-blue-dark">
              <i class="fa fa-angle-left me-3" />
              ヘルプ一覧に戻る
            </a>
          </div>
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
<style lang="scss">
@import '../styles/style.scss';

$light-blue: #EDF9FF;
$border-light: #E0E0E0;
$text-blue-dark: #34495e;
$link-text: #00A5B1;
$code-text: #BD0039;
$code-border: #abb4bd;
$code-bg: #eff1f3;
$light-gray: #f6f8fa;

.article {
  img {
    width: 100%;
  }

  .header-anchor {
    display: none;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 700;
    color:$text-blue-dark;
  }

  h1 {
    padding-bottom: 8px;
    margin: 24px 0 36px;
    border-bottom: solid 1px $border-light;
  }

  h2 {
    margin: 48px 0 24px;
  }

  h3,h4,h5,h6 {
    margin: 32px 0 16px;
  }

  h3 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }

  li,p {
    margin-bottom: 0.625em;
    line-height: 1.6em;
  }

  a {
    color: $link-text;
    text-decoration: none;
  }

  code {
    padding: 2px 4px;
    color: $code-text;
    background: $code-bg;
    border: solid 1px $code-border;
    border-radius: 4px;
  }

  table {
    margin: 16px 0;
  }

  td,th {
    padding: 8px 16px;
    border: solid 1px $border-light;
  }

  th {
    font-weight: 700;
    text-align: center;
  }

  tr:nth-of-type(2n) td {
    background-color: $light-gray;
  }
}

.return {
  margin: 72px 0 56px;
}

</style>
