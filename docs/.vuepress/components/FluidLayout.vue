<template>
  <div
    class="theme-container fluid"
    :class="pageClasses"
  >
    <Navbar
      v-if="shouldShowNavbar"
    />

    <Page>
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'

export default {
  components: { Page, Navbar },
  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },
}
</script>

<style lang="stylus">
@import '~@vuepress/core/lib/client/style/config.styl';

.fluid {
  .page {
    padding: 0;

    .theme-default-content {
      max-width: unset;
      padding: $navbarHeight 0 0;

      > :first-child {
        margin-top: 0;
      }
    }

    .page-edit {
      display: none;
    }
  }
}
</style>
