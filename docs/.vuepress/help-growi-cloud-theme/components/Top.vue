<template>
  <div class="container mt-4">
    <!-- TODO: i18n categoryName -->
    <PageLinks categoryName="Help" :pageItems="getPageItems(['application-settings', 'service', 'payment-contract', 'trouble-shooting', 'others'])" />

    <!-- TODO: i18n categoryName -->
    <PageLinks categoryName="Docs" :pageItems="getPageItems(['tutorial', 'tips', 'feature-introduction', 'management-cookbook', 'upgrading'])" />
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
