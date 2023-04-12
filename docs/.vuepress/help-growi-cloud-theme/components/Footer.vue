<template>
  <footer class="pt-5 gc-bg-dark position-relative">
    <img class="d-none d-lg-inline position-absolute gc-footer-img" src="/assets/images/gc-footer-background.svg" />
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <h5 class="text-white fw-bold gc-footer-title my-4">GROWI.cloud について</h5>
          <div class="d-flex">
            <div class="d-flex flex-column mr-5">
              <a href="/price-and-features" class="gc-footer-link">料金・機能</a>
              <a href="/introductions" class="gc-footer-link">導入事例</a>
              <a href="/blog/" class="gc-footer-link">ブログ記事</a>
              <a href="/media" class="gc-footer-link">メディア紹介実績</a>
            </div>
            <div class="d-flex flex-column text-white">
              <a class="gc-footer-link" href="/signup?contractType=CORPORATION">フリートライアル</a>
              <a class="gc-footer-link" href="/contact" target="_blank" rel="noopener noreferrer">お問い合わせ</a>
              <a class="gc-footer-link" href="/catalog-request" target="_blank" rel="noopener noreferrer">資料請求</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <p class="text-white fw-bold gc-footer-title my-4">会社概要・規約</p>
          <div class="d-flex flex-column text-white mr-5">
            <a class="gc-footer-link" href="https://weseek.co.jp/ja" target="_blank" rel="noopener noreferrer">会社概要</a>
            <a class="gc-footer-link" href="/terms-of-service">利用規約</a>
            <a class="gc-footer-link" href="/privacy-policy">プライバシーポリシー</a>
            <a class="gc-footer-link" href="/asct">特定商取引法に基づく表記</a>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <p class="text-white fw-bold gc-footer-title my-4">サポート・コミュニティ</p>
          <div class="d-flex flex-column text-white mr-5">
            <a class="gc-footer-link" href="/login">サービズへログイン</a>
            <a class="gc-footer-link" href="/help">ヘルプ</a>
            <a class="gc-footer-link" href="https://growi.org" target="_blank" rel="noopener noreferrer">GROWI.org</a>
            <a class="gc-footer-link" href="https://docs.growi.org" target="_blank" rel="noopener noreferrer">GROWI Docs</a>
          </div>
        </div>
        <div class="col-12 col-md-2">
          <!-- TODO: 120065 -->
          <div class="dropdown">
            <p class="text-white fw-bold gc-footer-title my-4">
              <span aria-haspopup="true" class="dropdown-toggle gc-change-laguage-dropdown" aria-expanded="false">言語選択</span>
            </p>
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

<style scoped>
.gc-bg-dark {
  background-color: #254459 !important;
}

.gc-text-right {
  text-align: right !important;
}

.gc-footer-img {
  right: 0;
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
}

.gc-footer-link:hover {
  color: #bdd8ea;
  text-decoration: underline;
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
  cursor: 'pointer'
};
</style>
