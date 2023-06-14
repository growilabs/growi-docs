<template>
  <footer class="pt-5 gc-bg-dark position-relative">
    <img class="d-none d-lg-inline position-absolute gc-footer-img" src="/assets/images/gc-footer-background.svg" />
    <div class="container">
      <div class="row">

        <div class="col-12 col-md-4">
          <h5 class="text-white fw-bold gc-footer-title my-4">{{ this.$themeLocaleConfig.about_growi_cloud }}</h5>
          <div class="d-flex">
            <div class="d-flex flex-column mr-5">
              <a href="https://growi.cloud/price-and-features" class="gc-footer-link">{{ this.$themeLocaleConfig.price_and_features }}</a>
              <a href="https://growi.cloud/introductions" class="gc-footer-link">{{ this.$themeLocaleConfig.case_study }}</a>
              <a href="https://growi.cloud/blog/" class="gc-footer-link">{{ this.$themeLocaleConfig.blog }}</a>
              <a href="https://growi.cloud/media" class="gc-footer-link">{{ this.$themeLocaleConfig.media_introduction_results }}</a>
            </div>
            <div class="d-flex flex-column text-white">
              <a class="gc-footer-link" href="https://growi.cloud/signup?contractType=CORPORATION">{{ this.$themeLocaleConfig.free_trial }}</a>
              <a class="gc-footer-link" href="https://growi.cloud/contact" target="_blank" rel="noopener noreferrer">{{ this.$themeLocaleConfig.contact }}</a>
              <a class="gc-footer-link" href="https://growi.cloud/catalog-request" target="_blank" rel="noopener noreferrer">{{ this.$themeLocaleConfig.catalog_request }}</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-3">
          <p class="text-white fw-bold gc-footer-title my-4">{{ this.$themeLocaleConfig.company_profile_terms_of_use }}</p>
          <div class="d-flex flex-column text-white mr-5">
            <a class="gc-footer-link" :href="`https://weseek.co.jp/${this.$lang}`" target="_blank" rel="noopener noreferrer">{{ this.$themeLocaleConfig.about_us }}</a>
            <a class="gc-footer-link" href="https://growi.cloud/terms-of-service">{{ this.$themeLocaleConfig.terms_of_service }}</a>
            <a class="gc-footer-link" href="https://growi.cloud/privacy-policy">{{ this.$themeLocaleConfig.privacy_policy }}</a>
            <a class="gc-footer-link" href="https://growi.cloud/asct">{{ this.$themeLocaleConfig.notation_based_on_the_act_on_specified_commercial_transactions }}</a>
          </div>
        </div>

        <div class="col-12 col-md-3">
          <p class="text-white fw-bold gc-footer-title my-4">{{ this.$themeLocaleConfig.community_support }}</p>
          <div class="d-flex flex-column text-white mr-5">
            <a class="gc-footer-link" href="https://growi.cloud/login">{{ this.$themeLocaleConfig.login_to_service }}</a>
            <router-link class="gc-footer-link" :to="`/${this.$lang}`">{{ this.$themeLocaleConfig.help }}</router-link>
            <a class="gc-footer-link" :href="`https://growi.org/${this.$lang}`" target="_blank" rel="noopener noreferrer">GROWI.org</a>
            <a class="gc-footer-link" :href="`https://docs.growi.org/${this.$lang}`" target="_blank" rel="noopener noreferrer">GROWI Docs</a>
          </div>
        </div>

        <div class="col-12 col-md-2">
          <div class="dropdown">
            <button type="button" class="btn border-0 text-white fw-bold gc-footer-title pt-4" id="change-language-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <span aria-haspopup="true" class="dropdown-toggle gc-change-laguage-dropdown" aria-expanded="false">{{ this.$themeLocaleConfig.select_language }}</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="change-language-dropdown">
              <li><a :class="`dropdown-item ${isDisabledLanguageItem('ja') ? 'disabled' : ''}`" @click.prevent="changeLanguage('ja')">{{ this.$themeLocaleConfig.japanese }}</a></li>
              <li><a :class="`dropdown-item ${isDisabledLanguageItem('en') ? 'disabled' : ''}`" @click.prevent="changeLanguage('en')">{{ this.$themeLocaleConfig.english }}</a></li>
            </ul>
          </div>
        </div>

        <div class="col-12 gc-text-right">
          <a href="https://twitter.com/weseek_inc" class="btn btn-lg fa-lg btn-rounded mr-2" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter gc-footer-sns-icon" />
          </a>
          <a href="https://www.facebook.com/weseekinc" class="btn btn-lg fa-lg btn-rounded" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f gc-footer-sns-icon" />
          </a>
        </div>

      </div>
    </div>
    <div class="text-center gc-copyright py-2">©WESEEK, Inc. All Rights Reserved.</div>
  </footer>
</template>


<script>
// eslint-disable-next-line no-unused-vars
import { Dropdown } from 'bootstrap';

export default {
  methods: {
    changeLanguage(targetLang) {
      const path = location.pathname.replace(`/help/${this.$lang}/`, `/${targetLang}/`);
      this.$router.replace({ path });
    },

    isDisabledLanguageItem(lang) {
      return lang === this.$lang;
    }
  },
}
</script>



<style lang="scss" scoped>
.gc-bg-dark {
  background-color: #254459 !important;
}

.gc-text-right {
  text-align: right !important;
}

.gc-footer-img {
  right: 0;
  pointer-events: none;
  mix-blend-mode: multiply;
  opacity: 0.8;
}

.gc-footer-title {
  font-size: 14px;
}

.gc-footer-link {
  margin-bottom: 12px;
  font-size: 14px;
  color: #bdd8ea;
  text-decoration: none;
  &:hover {
    color: #bdd8ea;
    text-decoration: underline;
  }
}

.gc-footer-sns-icon {
  color: #92b7d0
}

.gc-copyright {
  font-size: 14px;
  color: #cce3e6;
  border-top: #2e556f 1px solid;
}

.gc-change-laguage-dropdown {
  cursor: 'pointer';
};
</style>
