<template>
  <div class="col-md-6">
    <h4 class="fw-bold mb-4">{{ this.pageItem.title }}</h4>
    <ul class="gc-page-ul" v-for="child in this.pageItem.children" :key="child.key" >
      <li><a class="gc-page-link" :href="child.regularPath" >{{ child.title }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pageItem: Object
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
