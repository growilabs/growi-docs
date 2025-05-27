# エディターアシスタント機能を使う

## GROWI AI エディターアシスタントとは

GROWI AI エディターアシスタント（以下、「エディターアシスタント」と呼びます）は、AIを使いエディター中の文章の書き換え・文章の生成を行う機能です。

また GROWI 内に存在するページのナレッジに基づいた文章生成も可能です。

## エディターアシスタントの利用方法

1. エディターアシスタントを利用したいページにアクセスし、エディターモードで開く
1. エディター左下にある「エディターアシスタント」ボタンをクリック

    <img :src="$withBase('/assets/images/ja/ai-editor-assistant_1.png')" alt="ai-editor-assistant_1.png" class="border">

1. 右サイドバー下部のフォームにプロンプトを入力し、送信ボタンをクリック

    <img :src="$withBase('/assets/images/ja/ai-editor-assistant_2.png')" alt="ai-editor-assistant_2.png" class="border">

1. エディターに生成された文章が差分表示されるので、エディター中の「Accept (採用)」or「Discard (破棄)」 をクリックするか右サイドバーの「採用」or「破棄」ボタンをクリックすることでエディターに文章を反映させることができます

    <img :src="$withBase('/assets/images/ja/ai-editor-assistant_3.png')" alt="ai-editor-assistant_3.png" class="border">


## クイックメニューを使う

あらかじめ GROWI 側にセットされているプロンプトを使って文章生成ができます。

1. エディター左下にある「エディターアシスタント」ボタンをクリック
1. 右サイドバー上部にあるクイックメニューからあらかじめ用意されているプロンプトを選択 (例として「この記事の要約をつくる」を選択)

    <img :src="$withBase('/assets/images/ja/ai-editor-assistant_4.png')" alt="ai-editor-assistant_4.png" class="border">

1. 文章が生成される

    <img :src="$withBase('/assets/images/ja/ai-editor-assistant_5.png')" alt="ai-editor-assistant_5.png" class="border">


## 選択した文章を書き換える

エディター中の特定の文章を選択し、その文章の書き換えができます。

1. エディター中の文章を選択する

    <img :src="$withBase('/assets/images/ja/ai-editor-assistant_6.png')" alt="ai-editor-assistant_6.png" class="border">

1. 右サイドバー下部のフォームにプロンプトを入力し、送信ボタンをクリック

    <img :src="$withBase('/assets/images/ja/ai-editor-assistant_7.png')" alt="ai-editor-assistant_7.png" class="border">

1. 選択した文章に生成された文章が差分表示される

    <img :src="$withBase('/assets/images/ja/ai-editor-assistant_8.png')" alt="ai-editor-assistant_8.png" class="border">


## GROWI 内のナレッジに基づいた文章を生成する

GROWI のナレッジアシスタントの学習内容に基づいて文章生成できます。

1. [ナレッジアシスタントの作成手順](/ja/guide/features/ai-knowledge-assistant.html#ナレッジアシスタントの作成手順) を参考にナレッジアシスタントを作成
1. エディターアシスタントの右サイドバー上部の「アシスタントを使用する」ボタンをクリック
1. 自分で作成したナレッジアシスタントや他のユーザーが公開しているナレッジアシスタントが表示されるのでいずれかを選択

     <img :src="$withBase('/assets/images/ja/ai-editor-assistant_9.png')" alt="ai-editor-assistant_9.png" class="border">

1. 他のセクションを参考にプロンプトを入力してエディターに文章を生成する


<ContextualBlock context="docs-growi-org">

## 環境変数

エディターアシスタント機能の利用には、環境変数の設定が必要です。

詳細は [AI 連携機能のセットアップと管理](/ja/admin-guide/management-cookbook/setup-ai.html) や [GROWI AI オプションの環境変数](/ja/admin-guide/admin-cookbook/env-vars.html)をご参照ください。

</ContextualBlock>
