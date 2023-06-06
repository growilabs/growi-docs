<template>
   <div class="container mt-4">

    <!-- TODO: i18n categoryName -->
    <PageLinks categoryName="Docs" :pageItems="getPageItems(['tutorial', 'tips', 'feature-introduction'])" />

      <!-- ▼ 共通, よくある質問 ▼  -->
      <div class="mb-5">
        <div class="row">
          <div class="col-md-6">
            <h4 class="fw-bold mb-4">共通</h4>
            <ul class="gc-page-ul">
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
            </ul>
          </div>

          <div class="col-md-6">
            <h4 class="fw-bold mb-4">よくある質問</h4>
              <ul class="gc-page-ul">
                <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
                <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
                <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
                <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
                <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
                <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
                <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              </ul>
          </div>
        </div>
      </div>

      <!-- ▼  ユーザーヘルプ ▼  -->
      <div class="mb-5">
        <h3 class="fw-bold">ユーザーヘルプ</h3>
        <hr class="mt-3 mb-4">

        <div class="row mb-5">
          <div class="col-md-6">
            <h4 class="fw-bold mb-4">カテゴリ</h4>
            <ul class="gc-page-ul">
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
            </ul>
          </div>

          <div class="col-md-6">
            <h4 class="fw-bold mb-4">カテゴリ</h4>
            <ul class="gc-page-ul">
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
            </ul>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-md-6">
            <h4 class="fw-bold mb-4">カテゴリ</h4>
            <ul class="gc-page-ul">
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
            </ul>
          </div>

          <div class="col-md-6">
            <h4 class="fw-bold mb-4">カテゴリ</h4>
            <ul class="gc-page-ul">
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ▼  管理者ヘルプ  ▼  -->
      <div class="mb-5">
        <h3 class="fw-bold">管理者ヘルプ</h3>
        <hr class="mt-3 mb-4">

        <div class="row mb-5">
          <div class="col-md-6">
            <h4 class="fw-bold mb-4">カテゴリ</h4>
            <ul class="gc-page-ul">
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
            </ul>
          </div>

          <div class="col-md-6">
            <h4 class="fw-bold mb-4">カテゴリ</h4>
            <ul class="gc-page-ul">
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
            </ul>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-md-6">
            <h4 class="fw-bold mb-4">カテゴリ</h4>
            <ul class="gc-page-ul">
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
            </ul>
          </div>

          <div class="col-md-6">
            <h4 class="fw-bold mb-4">カテゴリ</h4>
            <ul class="gc-page-ul">
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ▼  よくある質問  ▼  -->
      <div class="mb-3">
        <h3 class="fw-bold">よくある質問</h3>
        <hr class="mt-3 mb-4">

        <div class="row mb-5">
          <div class="col-md-6">
            <h4 class="fw-bold mb-4">カテゴリ</h4>
            <ul class="gc-page-ul">
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
            </ul>
          </div>

          <div class="col-md-6">
            <h4 class="fw-bold mb-4">カテゴリ</h4>
            <ul class="gc-page-ul">
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
              <li><a class="gc-page-link" href="#">記事のタイトルが入ります</a></li>
            </ul>
          </div>
        </div>
      </div>
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
    // TODO: i18n
    this.topPageItems = resolveTopPageItems(this.$site, 'ja');
  },

  methods: {
    getPageItems(itemKeys) {
      return this.topPageItems.filter(item => {
        return itemKeys.includes(item.key);
      });
    },
  }
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
