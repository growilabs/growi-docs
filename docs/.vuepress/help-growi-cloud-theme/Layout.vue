<template>
  <div>
    <GcHeader />
    <!-- TODO: 119321 -->
    <!-- <Content /> -->
    <GcFooter />
  </div>
</template>

<script>
import GcHeader from '@theme/components/Header.vue'
import GcFooter from '@theme/components/Footer.vue'

export default {
  components: { GcHeader,GcFooter },
}
</script>
