<template>
  <div class="navbar-expand-lg navbar-static-top">
    <div>
      <ul class="nav navbar-nav flex-md-row">

        <li class="nav-item p-2 p-md-0 ms-md-3">
          <a href="https://growi.cloud/price-and-features/jpn" class="nav-link gc-text-dark fw-bold">
            <span class="pb-1">{{ this.$themeLocaleConfig.price_and_features }}</span>
          </a>
        </li>

        <li class="nav-item p-2 p-md-0 ms-md-3">
          <a href="https://growi.cloud/interviews" class="nav-link gc-text-dark fw-bold">
            <span class="pb-1">{{ this.$themeLocaleConfig.case_study}}</span>
          </a>
        </li>

        <li class="nav-item p-2 p-md-0 ms-md-3">
          <a href="https://growi.cloud/blog/" class="nav-link gc-text-dark fw-bold">
            <span class="pb-1">{{ this.$themeLocaleConfig.blog }}</span>
          </a>
        </li>

        <li class="nav-item p-2 p-md-0  ms-md-3 gc-active">
          <router-link :to="`/${this.$lang}`" class="nav-link gc-text-dark fw-bold">{{ this.$themeLocaleConfig.help }}</router-link>
        </li>

        <li class="nav-item p-2 p-md-0 ms-md-3">
          <a href="https://growi.cloud/v2/contact" class="nav-link gc-text-dark fw-bold">{{ this.$themeLocaleConfig.contact }}</a>
        </li>

        <li class="nav-item p-2 p-md-0 ms-md-3">
          <a
            type="button"
            class="btn gc-bg-gradation-skyblue gc-global-menu-button text-white fw-bold  mt-md-0 py-md-2 px-md-3"
            href="https://growi.cloud/signup?contractType=CORPORATION">
              {{ this.$themeLocaleConfig.free_trial }}
            <i class="ml-2 fas fa-angle-right"></i>
          </a>
        </li>

        <li class="nav-item p-2 p-md-0 ms-md-3">
          <!-- SP mode -->
          <a href="https://growi.cloud/v2/catalog-request"
             class="btn btn-outline-dark d-block d-md-none gc-global-menu-button fw-bold">
             {{ this.$themeLocaleConfig.catalog_request }}
             <i class="ml-2 fas fa-angle-right"></i>
          </a>

          <!-- PC mode -->
          <a href="https://growi.cloud/v2/catalog-request"
             class="gc-global-nav-link d-none d-md-block nav-link gc-text-dark fw-bold">
            {{ this.$themeLocaleConfig.catalog_request }}
          </a>
        </li>

        <li class="nav-item p-2 p-md-0 ms-md-3">
          <a href="https://growi.cloud/login" class="gc-global-nav-link d-block nav-link gc-text-dark fw-bold text-center">{{ this.$themeLocaleConfig.login }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins/breakpoints';

.gc-text-dark {
  color: #254459;
}

.gc-bg-gradation-skyblue {
  background: transparent linear-gradient(105deg, #11c5dd 0%, #008dc1 100%) 0% 0% no-repeat padding-box;
}

.gc-active ::after {
  display: block;
  height: 3px;
  font-size: 1px;
  content: '';
  @extend .gc-bg-gradation-skyblue;
}

.gc-global-menu-button {
  @include media-breakpoint-down(sm) {
    width: 100%;
  }
}

.gc-global-nav-link {
  @include media-breakpoint-down(sm) {
    font-size: 14px;
  }
}
</style>
