<template>
  <div class="mt-4">
    <div v-if="this.categoryName != null">
      <h3 class="mb-4 fw-bold">{{ this.categoryName }}</h3>
    </div>

    <div class="row">
      <div class="col-md-6 mb-4" v-for="pageItem in this.pageItems" :key="pageItem.key" >
        <h4 class="mb-4 fw-bold">{{ pageItem.title }}</h4>
        <ul class="gc-page-ul" v-for="child in pageItem.children" :key="child.key" >
          <li><router-link class="gc-page-link" :to="child.regularPath" >{{ child.title }}</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryName: String,
    pageItems: Array,
  },
}
</script>

<style lang="scss" scoped>

$text-blue-dark: #34495e;

h3 {
  padding-bottom: 20px;
  color: $text-blue-dark;
  border-bottom: 1px solid #E0E0E0;
}

h4 {
  color: $text-blue-dark;
}

li::marker {
  color: #3C4144;
}

.gc-page-link {
  color:  $text-blue-dark;
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
