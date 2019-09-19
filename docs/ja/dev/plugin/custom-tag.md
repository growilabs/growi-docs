# カスタムタグ

(TBD)

## ステートキャッシュ

カスタムタグ利用に伴う React Component の描画は、Markdown から HTML への変換処理が行われる度に行われます。そのため、特にページ編集時のプレビューモードではパフォーマンス向上のために [Window.sessionStorage](https://developer.mozilla.org/ja/docs/Web/API/Window/sessionStorage) を利用した**ステートキャッシュ**の利用を推奨します。
