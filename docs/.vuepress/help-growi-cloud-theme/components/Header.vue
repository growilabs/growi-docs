<template>
  <header class="navbar d-flex align-items-center justify-content-between py-3 px-4 w-auto">
    <a class="navbar-brand" href="/" title="Home">
      <span class="gc-brandlogo-midium py-2 fw-bold gc-text-lato">
        <img src="/assets/images/gc-logo.png">
        <span class="gc-text-dark align-middle">GROWI</span><span class="gc-brandlogo-second-level-domain align-middle">.cloud</span>
      </span>
    </a>

    <div class="navbar-expand-lg navbar-static-top">
      <div class="navbar-main">
        <ul class="nav navbar-nav flex-md-row">
          <li class="nav-item p-2 p-md-0 ml-md-3">
            <a href="/" class="nav-link gc-text-dark fw-bold">
              <span class="pb-1">ホーム</span>
            </a>
          </li>
          <li class="nav-item p-2 p-md-0 ml-md-3">
            <a href="/price-and-features" class="nav-link gc-text-dark fw-bold">
              <span class="pb-1">料金・機能</span>
            </a>
          </li>
          <li class="nav-item p-2 p-md-0 ml-md-3">
            <a href="/introductions" class="nav-link gc-text-dark fw-bold">
              <span class="pb-1">導入事例</span>
            </a>
          </li>
          <li class="nav-item p-2 p-md-0 ml-md-3">
            <a href="/blog" class="nav-link gc-text-dark fw-bold">
              <span class="pb-1">ブログ記事</span>
            </a>
          </li>
          <li class="nav-item p-2 p-md-0 ml-md-3 gc-active">
            <a href="/help" class="nav-link gc-text-dark fw-bold">ヘルプ</a>
          </li>
          <li class="nav-item p-2 p-md-0 ml-md-3">
            <a href="/contact" target="_blank" rel="noopener noreferrer" class="nav-link gc-text-dark fw-bold">お問い合わせ</a>
          </li>
          <li class="nav-item p-2 p-md-0 ml-md-3">
            <a
              type="button"
              class="btn gc-bg-gradation-skyblue text-white fw-bold  mt-md-0 py-md-2 px-md-3"
              href="/signup?contractType=CORPORATION">
                無料でトライアル
              <i class="ml-2 fas fa-angle-right"></i>
            </a>
          </li>
          <li class="nav-item p-2 p-md-0 ml-md-3">
            <a href="/catalog-request" target="_blank" rel="noopener noreferrer" class="nav-link gc-text-dark fw-bold">資料請求</a>
          </li>
          <li class="nav-item p-2 p-md-0 ml-md-3">
            <a href="/login" class="nav-link gc-text-dark fw-bold">ログイン</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.gc-text-dark {
  color: #254459;
}

.gc-brandlogo-midium {
  font-size: 20px;
}

.gc-brandlogo-second-level-domain {
  color: #33b0c1;
}

.gc-text-lato {
  font-family: Lato;
}

.gc-brandlogo-midium img {
  width: auto;
  height: 40px;
  margin-right: 12px;
}

.gc-active ::after {
  display: block;
  height: 3px;
  font-size: 1px;
  content: '';
  background: transparent linear-gradient(105deg, #11c5dd 0%, #008dc1 100%) 0% 0% no-repeat padding-box;
}

.gc-bg-gradation-skyblue {
  background: transparent linear-gradient(105deg, #11c5dd 0%, #008dc1 100%) 0% 0% no-repeat padding-box;
}
</style>
