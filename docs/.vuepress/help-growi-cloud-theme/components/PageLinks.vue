<template>
  <div class="mb-5">
    <div v-if="this.categoryName != null">
      <h3 class="mb-4">{{ this.categoryName }}</h3>
    </div>

    <div class="row mb-5">
      <div class="col-md-6" v-for="pageItem in this.pageItems" :key="pageItem.key" >
        <h4 class="fw-bold mb-4">{{ pageItem.title }}</h4>
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

<style scoped>
h3 {
  padding-bottom: 20px;
  color:#18354A;
  border-bottom: 1px solid #E0E0E0;
}

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
