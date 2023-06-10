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
        <div class="col-11 col-md-4">
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

$light-blue: #edf9ff;
$text-blue-dark: #34495e;

.bg-cloud {
  background-color: $light-blue;
  background-image: url('/assets/images/cloud-background-abstract-right.png');
  background-repeat: no-repeat;
  background-position: right -50px bottom -16px;
  background-size: 100%;
  @include bs.media-breakpoint-up(md) {
    background-image: url('/assets/images/cloud-background-abstract-left.png'), url('/assets/images/cloud-background-abstract-right.png');
    background-position: left -50% bottom -3vw, right -50% bottom -3vw;
    background-size: 50%;
  }
}

.text-blue-dark {
  color: $text-blue-dark;
  &:hover {
    color: lighten($text-blue-dark, 10%);
  }
}

::v-deep {
  .search-box {
    input {
      width: 100%;
      padding: 100px, 100px, 100px, 100px;
      border-radius: 0px;
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
