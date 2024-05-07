# Write a page link

In GROWI, it is possible to write a link by the following two ways.

## Markdown 標準方式

The syntax is ``[Label](URL)``.


### Example 1: Inner page

#### Markdown

```markdown
[/Sandbox](/5a8b15576cf1e900242e0f43)
```

#### HTML

```html
<a href="/5a8b15576cf1e900242e0f43">/Sandbox</a>
```

### Example 2: External site

#### Markdown

```markdown
[Google](https://www.google.co.jp/)
```

#### HTML

```html
<a href="https://www.google.co.jp/" target="_blank">Google</a>
```


## Pukiwiki like linker

The format is the title and path between `[[` and `]]`.

`Title` and `Reference page` are separated by `>` symbol and written like `Title>Reference page`.

The title is optional.
The reference page can be described as a relative link based on the page being described.


### Example 3: Inner page

#### Markdown

```markdown
[[/Sandbox]]
```

#### HTML

```html
<a href="/Sandbox">/Sandbox</a>
```

#### Markdown

```markdown
The example for math is [[HERE>./Math]]
```

#### HTML

```html
The example for math is <a href="/Sandbox/Math">HERE</a>
```

### Example 4: External site

#### Markdown

```markdown
[[Google>https://www.google.co.jp]]
```

#### HTML

```html
<a href="https://www.google.co.jp/" target="_blank">Google</a>
```
