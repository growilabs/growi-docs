<template>
  <div class="container py-5">
    <p class="text-muted d-none d-md-block">
      <a href="https://growi.cloud/" class="fa fa-house me-2 text-muted"/>
      <i class="fa fa-angle-right me-2" />
      <!-- TODO: i18n -->
      <router-link :to="`/${this.$lang}`" class="me-2 text-decoration-none text-muted">ヘルプトップ</router-link >
      <i class="fa fa-angle-right me-2" />
      <a>{{ this.$page.title }}</a>
    </p>
    <Content class="article" />
    <div class="text-center fw-bold return">
      <a href="/help/ja" class="fs-4 text-decoration-none text-blue-dark">
        <i class="fa fa-angle-left me-3" />
        <!-- TODO: i18n -->
        ヘルプ一覧に戻る
      </a>
    </div>
  </div>
</template>>

<style lang="scss">
@use '../styles/style.scss';
@use '../stules/index.stly';

$light-blue: #EDF9FF;
$border-light: #E0E0E0;
$text-blue-dark: #34495e;
$link-text: #00A5B1;
$code-text: #BD0039;
$code-border: #abb4bd;
$code-bg: #eff1f3;
$light-gray: #f6f8fa;

// .article {
//   img {
//     width: 100%;
//     margin: 24px 0;
//   }

//   .header-anchor {
//     display: none;
//   }

//   h1,h2,h3,h4,h5,h6 {
//     font-weight: 700;
//     color:$text-blue-dark;
//   }

//   h1 {
//     padding-bottom: 8px;
//     margin: 24px 0 24px;
//     border-bottom: solid 1px $border-light;
//   }

//   h2 {
//     margin: 40px 0 24px;
//   }

//   h3,h4,h5,h6 {
//     margin: 32px 0 16px;
//   }

//   h3 {
//     font-size: 24px;
//   }

//   h3 {
//     font-size: 20px;
//   }

//   h4 {
//     line-height: 2rem;
//   }

//   li,p {
//     margin-bottom: 0.625em;
//     line-height: 1.6em;
//   }

//   a {
//     color: $link-text;
//     text-decoration: none;
//   }

// code {
//   padding: 2px 4px;
//   color: $code-text;
//   background: $code-bg;
//   border: solid 1px $code-border;
//   border-radius: 4px;
// }

//   table {
//     margin: 16px 0;
//   }

//   td,th {
//     padding: 8px 16px;
//     border: solid 1px $border-light;
//   }

//   th {
//     font-weight: 700;
//     text-align: center;
//   }

//   tr:nth-of-type(2n) td {
//     background-color: $light-gray;
//   }
// }

// .return {
//   margin: 72px 0 56px;
// }
</style>
