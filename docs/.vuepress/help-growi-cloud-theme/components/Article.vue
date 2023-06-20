<template>
  <div class="container py-5">

    <!-- Breadcrumbs -->
    <p class="text-muted d-none d-md-block">
      <a href="https://growi.cloud/" class="fa fa-house me-2 text-muted"/>
      <i class="fa fa-angle-right me-2" />
      <router-link :to="`/${this.$lang}`" class="me-2 text-decoration-none text-muted">{{ this.$themeLocaleConfig.help }}</router-link >
      <i class="fa fa-angle-right me-2" />
      <a>{{ this.$page.title }}</a>
    </p>

    <!-- Markdown contents -->
    <Content class="article" />

    <!-- Back to top button -->
    <div class="text-center fw-bold mt-5">
      <router-link :to="`/${this.$lang}`" class="fs-4 text-decoration-none text-blue-dark">
        <i class="fa fa-angle-left me-3" />
        {{  this.$themeLocaleConfig.back_to_top }}
      </router-link>
    </div>
  </div>
</template>>


<style lang="scss">
@use '../../styles/style.scss';

$text-blue-dark: #34495e;
$link-text: #00A5B1;
$code-text: #BD0039;
$code-border: #abb4bd;
$code-bg: #eff1f3;

.article {
  img {
    width: 100%;
  }

  .header-anchor {
    display: none;
  }

  h1,h2,h3,h4,h5,h6 {
    color:$text-blue-dark;
  }

  h1,h2 {
    margin: 40px 0 24px;
  }

  h3,h4,h5,h6 {
    margin: 32px 0 20px;
  }

  p {
    margin-bottom: 0.7em;
  }

  a {
    color: $link-text;
  }

  code {
    padding: 2px 4px;
    color: $code-text;
    background: $code-bg;
    border: solid 1px $code-border;
    border-radius: 4px;
  }

  pre code {
    color: unset;
    background: none;
    border: 0;
  }
}
</style>
