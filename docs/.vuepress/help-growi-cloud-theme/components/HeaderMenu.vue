<template>
  <div data-toggle="sticky" class="sticky-top">
    <header class="navbar d-flex align-items-center justify-content-between py-2 px-4">

      <!-- Brand logo -->
      <a class="navbar-brand" href="https://growi.cloud" title="Home">
        <span class="gc-brandlogo-midium py-2 fw-bold gc-text-lato">
          <img src="/assets/images/gc-logo.png"><span class="gc-text-dark align-middle">GROWI</span><span class="gc-brandlogo-second-level-domain align-middle">.cloud</span>
        </span>
      </a>

      <!-- PC mode -->
      <div class="d-none d-md-block">
         <Header />
      </div>

      <!-- SP mode -->
      <button type="button" class="btn btn-icon header-btn d-md-none p-0" @click="() => {this.isOpen = true}">
        <i class="fa fa-lg fa-bars"></i>
      </button>

      <div :class="`gc-global-menu-wrapper ${this.isOpen ? 'gc-global-menu-active' : ''}`" @click="() => {this.isOpen = false}">
        <div class="gc-global-menu h-100 gc-w-80 bg-white p-3">
          <Header />
        </div>
      </div>

      <template v-if="this.isOpen">
        <div class="gc-global-menu-transparent"></div>
      </template>
    </header>
  </div>
</template>


<script>
import Header from '@theme/components/Header.vue';

export default {
  components: { Header },

  data() {
    return {
      isOpen: false,
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

.gc-brandlogo-midium {
  font-size: 20px;
  img {
    width: auto;
    height: 40px;
    margin-right: 8px;
    @include media-breakpoint-down(sm) {
      height: 32px;
      margin-right: 8px;
    }
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
