 // see: https://github.com/vuejs/vuepress/issues/2112

<template>
  <div>
    <slot v-if="!$themeConfig.isHelpGrowiCloud"/>
  </div>
</template>
