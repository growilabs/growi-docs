# Google Analytics Settings

1. Manage → Customize\(`/admin/customize` page transition \)
2. Set the code below as a custom script

   ```javascript
   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
   })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

   ga('create', 'UA-XXXXXXXX-X', 'auto');
   ga('send', 'pageview');
   ```

   * `UA-XXXXXXXX-X` should be rewritten based on individual environments





