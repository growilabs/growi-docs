<template>
  <div class="container px-4 mt-5">
    <PageLinks :categoryName="this.$themeLocaleConfig.category.about_growi_cloud" :pageItems="getPageItems(['application-settings', 'service', 'payment-contract', 'trouble-shooting', 'others'])" />
    <PageLinks :categoryName="this.$themeLocaleConfig.category.about_growi_app" :pageItems="getPageItems(['tutorial', 'examples', 'feature', 'management-settings', 'upgrade-guide'])" />
  </div>
</template>

<script>
import { resolveTopPageItems } from '../../utils';
import PageLinks from '@theme/components/PageLinks.vue';

export default {
  components: { PageLinks },

  data() {
    return {
      topPageItems: null,
    };
  },

  beforeMount() {
    this.getTopPageItems();
  },

  methods: {
    getTopPageItems() {
      this.topPageItems = resolveTopPageItems(this.$site, this.$lang);
    },

    getPageItems(itemKeys) {
      return this.topPageItems.filter(item => {
        return itemKeys.includes(item.key);
      });
    },
  },

  watch: {
    $lang() {
      this.getTopPageItems();
    }
  },
}
</script>

<style scoped>
.gc-page-link {
  color: black;
  text-decoration: none;
}

.gc-page-link:hover {
  text-decoration: underline;
}

.gc-page-ul {
  padding-left: 18px;
}

.gc-page-ul li {
  margin-bottom: 10px;
}
</style>
