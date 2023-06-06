<template>
  <div class="mb-5">
    <h3 class="fw-bold">{{ this.categoryName }}</h3>
    <hr class="mt-3 mb-4">

    <div class="row mb-5">
      <div class="col-md-6" v-for="pageItem in this.pageItems" :key="pageItem.key" >
        <h4 class="fw-bold mb-4">{{ pageItem.title }}</h4>
        <ul class="gc-page-ul" v-for="child in pageItem.children" :key="child.key" >
          <li><a class="gc-page-link" :href="child.regularPath" >{{ child.title }}</a></li>
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
