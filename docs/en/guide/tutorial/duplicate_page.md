# duplicate page

When you can create a page, learn how to duplicate a page.

If you have a page that you use repeatedly,
Knowing the mechanism of replication and templates can be very useful.

## After create page tutorial

First, in order to duplicate the page, create a page for creating the hierarchy.

Press the "Create" button on a guide page, such as a tutorial page,
Let's create a duplicate page.


`![duplicate1](./images/duplicate1.png)`

`![duplicate2](./images/duplicate2.png)`

## Duplicate page

Under the duplicate page, create a page for "20191101" that will be the copy source.

Create a page and paste the following markdown description to create the page.


```
$lsx()
```

After that, click “Duplicate” in the image menu on the “20191101” page.


`![duplicate3](./images/duplicate3.png)`

`![duplicate4](./images/duplicate4.png)`

Enter the page name “20191102” and click the “Duplicate page” button.


`![duplicate5](./images/duplicate5.png)`

The page is duplicated like an image.

`![duplicate6](./images/duplicate6.png)`

By duplicating the page this way,
You can easily create a wiki page with copied contents.

Next, let's use the template function as a similar function.

## Create a template

Template is a function
that allows you to assign a fixed description when creating a new page.


There are two types of templates: Template for children and Template for descendants.


When you create "Template for children",
it applies only to the hierarchy where the template page exists.


When you create "Template for descendants",
it applies to all lower-level pages that have template pages.


Here we use "Template for children".


`![template1](./images/template1.png)`

Click on the Create Template button as shown in the image
to enter the template selection field.

Click the Edit button on "Template for children".
Then, the page creation screen with the page name “_template” will appear.

`![template2](./images/template2.png)`

On this screen, paste the following markdown description and save the page.

```
# タイトル
## サブタイトル
### 見出し1
### 見出し2
## 備考
```

`![template3](./images/template3.png)`

これでテンプレート作成は完了です。

続いて、作成したテンプレートを実際に活用する方法を紹介します。

## テンプレートがあるページ配下にページを作成する

テンプレート作成をしたページにて、「作成」をクリックしてページを作成します。

`![template4](./images/template4.png)`

すると、ページ作成直後に既にテンプレートで設定した内容が反映されています。

`![template5](./images/template5.png)`

`![template6](./images/template6.png)`

繰り返しページ作成する時にとても便利に活用できます。

是非積極的にテンプレート化する運用を考えて、効率的に wiki を構築しましょう。