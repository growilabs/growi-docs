# Mermaid で図を作成する

GROWI では [Mermaid](https://mermaid.js.org/) を利用して、様々な図を書くことができます。
具体的な記法は [Syntax and Configuration](https://mermaid.js.org/intro/n00b-syntaxReference.html) などをご参照ください。

<img :src="$withBase('/assets/images/ja/mermaid.png')" alt="mermaid">

### 記法例1

~~~~
``` mermaid
---
title: Node with text
---
flowchart LR
    id1[This is the text in the box]
```
~~~~

### 記法例2

~~~~
``` mermaid
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : Youtube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest
```
~~~~
