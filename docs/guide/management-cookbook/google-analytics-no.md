# Google Analytics の設定

1. 管理 → カスタマイズ\(`/admin/customize` ページへ遷移\)
2. 以下のコードをカスタムスクリプトに設定

   ```javascript
   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
   })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

   ga('create', 'UA-XXXXXXXX-X', 'auto');
   ga('send', 'pageview');
   ```

   * `UA-XXXXXXXX-X` 部分は各自の環境に合わせて書き換えてください





