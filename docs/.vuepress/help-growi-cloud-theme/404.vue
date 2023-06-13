<template></template>

<script>
export default {
  mounted() {
    if (location.pathname.startsWith('/help/ja/')) {
      this.$router.push('/ja/');
    }
    else {
      this.$router.push('/en/');
    }
  },
}
</script>
