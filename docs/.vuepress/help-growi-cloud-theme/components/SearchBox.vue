<template>
  <div class="bg-cloud py-5">
    <div class="container">
      <div class="row">
        <h1 class="col-12 col-md-8 fs-2 mb-4 mb-md-0 fw-bold text-center text-md-start">
          <router-link :to="`/${this.$lang}`"  class="text-blue-dark text-decoration-none">
            {{ this.$themeLocaleConfig.help_page }}
          </router-link>
        </h1>
        <div class="col-11 col-md-4 my-auto">
          <VuePressSearchBox :key="resetKey" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import VuePressSearchBox from '@SearchBox';

export default {
  components: { VuePressSearchBox },

  data() {
    return {
      resetKey: 0,
    }
  },

  methods: {
    refresh() {
      this.resetKey++
    }
  },

  created() {
    this.$themeConfig.searchPlaceholder = this.$themeLocaleConfig.search_page;
  },

  watch: {
    $lang() {
      this.$themeConfig.searchPlaceholder = this.$themeLocaleConfig.search_page;
      // The value of the placeholder in "VuePressSearchBox" references $themeConfig.searchPlaceholder during the mounted() lifecycle hook.
      // To force a re-mount of the "VuePressSearchBox" component when the language setting is changed, you can use the refresh() method.
      // qiita: https://qiita.com/kubotak/items/1cb472cfb64df91b45c1
      // VuePressSearchBox: https://github.com/vuejs/vuepress/blob/9044f142f9253c9d120e03abd74f12de0113cf1f/packages/%40vuepress/plugin-search/SearchBox.vue#L122
      this.refresh();
    }
  },
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
