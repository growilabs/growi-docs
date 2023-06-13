<template>
  <div class="bg-cloud py-5">
    <div class="container">
      <div class="row">
        <h1 class="col-12 col-md-8 fs-2 mb-4 mb-md-0 fw-bold text-center text-md-start">
          <router-link :to="`/${this.$lang}`"  class="text-blue-dark text-decoration-none">
            <!-- TODO: i18n -->
            GROWI.cloud ヘルプページ
          </router-link>
        </h1>
        <div class="col-11 col-md-4 my-auto">
          <VuePressSearchBox />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import VuePressSearchBox from '@SearchBox';

export default {
  components: { VuePressSearchBox }
}
</script>


<style lang="scss" scoped>
@use '../../styles/bootsrap-init.scss' as bs;
@use '../../styles/style.scss';

::v-deep {
  .search-box {
    input {
      width: 310px;
      border-radius: 2px;
      &:focus {
        border-color: gray;
      }
    }

    .suggestions {
      a {
        @extend .text-blue-dark;
        text-decoration: none;
      }
    }
  }
}
</style>
