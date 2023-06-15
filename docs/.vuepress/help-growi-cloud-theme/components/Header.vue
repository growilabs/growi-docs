<template>
  <div class="navbar-expand-lg">
    <div class="navbar-main">
      <ul class="nav navbar-nav flex-md-row">

        <li class="nav-item p-2 p-md-0 ml-md-3">
          <a href="https://growi.cloud" class="nav-link gc-text-dark fw-bold">
            <span class="pb-1">{{ this.$themeLocaleConfig.home }}</span>
          </a>
        </li>

        <li class="nav-item p-2 p-md-0 ml-md-3">
          <a href="https://growi.cloud/price-and-features/jpn" class="nav-link gc-text-dark fw-bold">
            <span class="pb-1">{{ this.$themeLocaleConfig.price_and_features }}</span>
          </a>
        </li>

        <li class="nav-item p-2 p-md-0 ml-md-3">
          <a href="https://growi.cloud/introductions" class="nav-link gc-text-dark fw-bold">
            <span class="pb-1">{{ this.$themeLocaleConfig.case_study}}</span>
          </a>
        </li>

        <li class="nav-item p-2 p-md-0 ml-md-3">
          <a href="https://growi.cloud/blog/" class="nav-link gc-text-dark fw-bold">
            <span class="pb-1">{{ this.$themeLocaleConfig.blog }}</span>
          </a>
        </li>

        <li class="nav-item p-2 p-md-0 ml-md-3 gc-active">
          <router-link :to="`/${this.$lang}`" class="nav-link gc-text-dark fw-bold">{{ this.$themeLocaleConfig.help }}</router-link>
        </li>

        <li class="nav-item p-2 p-md-0 ml-md-3">
          <a href="https://growi.cloud/contact" target="_blank" rel="noopener noreferrer" class="nav-link gc-text-dark fw-bold">{{ this.$themeLocaleConfig.contact }}</a>
        </li>

        <li class="nav-item p-2 p-md-0 ml-md-3">
          <a
            type="button"
            class="btn gc-bg-gradation-skyblue text-white fw-bold  mt-md-0 py-md-2 px-md-3"
            href="https://growi.cloud/signup?contractType=CORPORATION">
              {{ this.$themeLocaleConfig.free_trial }}
            <i class="ml-2 fas fa-angle-right"></i>
          </a>
        </li>

        <li class="nav-item p-2 p-md-0 ml-md-3">
          <a href="https://growi.cloud/catalog-request" target="_blank" rel="noopener noreferrer" class="nav-link gc-text-dark fw-bold">{{ this.$themeLocaleConfig.catalog_request }}</a>
        </li>

        <li class="nav-item p-2 p-md-0 ml-md-3">
          <a href="https://growi.cloud/login" class="nav-link gc-text-dark fw-bold">{{ this.$themeLocaleConfig.login }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gc-text-dark {
  color: #254459;
}

.gc-brandlogo-second-level-domain {
  color: #33b0c1;
}

.gc-text-lato {
  font-family: Lato;
}

.gc-active ::after {
  display: block;
  height: 3px;
  font-size: 1px;
  content: '';
  background: transparent linear-gradient(105deg, #11c5dd 0%, #008dc1 100%) 0% 0% no-repeat padding-box;
}

.gc-bg-gradation-skyblue {
  background: transparent linear-gradient(105deg, #11c5dd 0%, #008dc1 100%) 0% 0% no-repeat padding-box;
}
</style>
