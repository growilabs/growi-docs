<template>
  <div data-toggle="sticky" class="sticky-top">
    <header class="navbar d-flex align-items-center justify-content-between py-2 px-4">

      <!-- Brand logo -->
      <a class="navbar-brand" href="https://growi.cloud" title="Home">
        <span class="gc-brandlogo-medium py-2 fw-bold gc-text-lato">
          <img src="/help/assets/help-growi-cloud/growi-cloud-brand-logo-positive.svg" alt="GROWI.cloud" />
        </span>
      </a>

      <!-- PC mode -->
      <div class="d-none d-md-block">
         <GlobalHeaderMenu />
      </div>

      <!-- SP mode -->
      <button type="button" class="btn btn-icon header-btn d-md-none p-0" @click="() => {this.isDisplayGlobalHeaderManu = true}">
        <i class="fa fa-lg fa-bars"></i>
      </button>

      <div :class="`gc-global-menu-wrapper ${this.isDisplayGlobalHeaderManu ? 'gc-global-menu-active' : ''}`" @click="() => {this.isDisplayGlobalHeaderManu = false}">
        <div class="gc-global-menu h-100 gc-w-80 bg-white p-3">
          <GlobalHeaderMenu />
        </div>
      </div>

      <template v-if="this.isDisplayGlobalHeaderManu">
        <div class="gc-global-menu-transparent"></div>
      </template>
    </header>
  </div>
</template>


<script>
import GlobalHeaderMenu from '@theme/components/GlobalHeaderMenu.vue';

export default {
  components: { GlobalHeaderMenu },

  data() {
    return {
      isDisplayGlobalHeaderManu: false,
    }
  },
};
</script>


<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins/breakpoints';

.gc-text-dark {
  color: #254459;
}

.gc-brandlogo-second-level-domain {
  color: #33b0c1;
}

.gc-text-lato {
  font-family: Lato;
}

.gc-brandlogo-medium {
  img {
    height: 28px;
    vertical-align: text-top;
  }
}

.gc-global-menu {
  position: absolute;
  right: 0;
}

.gc-global-menu-wrapper {
  position: fixed;
  top: 0;
  right: -100%;
  // To be displayed more fully than bootstrap elements
  z-index: 1300;
  width: 100%;
  height: 100vh;
  transition: all 0.6s;
}

.gc-global-menu-active {
  right: 0;
}

.gc-global-menu-transparent {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // To be displayed behind the mobile version of the menu
  z-index: 1299;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.6s;
}

.gc-w-80 {
  width: 80% !important;
}

.navbar {
  background-color: $white;
  box-shadow: 0px 2px 4px #0000003c;
}
</style>
