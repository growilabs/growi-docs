# Create diagrams using Mermaid

In GROWI, you can use [Mermaid](https://mermaid.js.org/) to create various diagrams. For specific syntax and configuration, please refer to [Syntax and Configuration](https://mermaid.js.org/intro/n00b-syntaxReference.html) for more information.

<img :src="$withBase('/assets/images/mermaid.png')" alt="">

### Example 1

~~~ mermaid
``` mermaid
---
title: Node with text
---
flowchart LR
    id1[This is the text in the box]
```
~~~

### Example 2

~~~ mermaid
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
~~~

