# Creating and Using Page Templates

In GROWI, you can model your new page based on a page template.

Templates make it easy to create pages that are regularly required, such as daily reports, bug reports, and meeting minutes.

## How to apply a template page to a hierarchy

This tutorial will walk you through creating a daily report template.

### Create a template page

<img :src="$withBase('/assets/images/en/template_01.png')" alt="template_01">

From the page toolbar, select Create/Edit template page.

<img :src="$withBase('/assets/images/en/template_02.png')" alt="template_02">

Select Create a Page Template at this Hierarchy Level from the displayed dialog.

Paste the following content into the template and save the template.

```markdown
# MM DD Daily Report

## What I did today

## Things to do tomorrow

## Blocked items which cannot be completed

## TODO

## Message
```

A page template for daily reports has now been created.

### Create a page using a page template

Create a new page at the same level as the template page.

You will be taken to the Edit Page screen for your new page, and it will be pre-filled with your template.

Edit the page as needed, then click Save to create your page.

<img :src="$withBase('/assets/images/en/template_03.png')" alt="template_03">

### Using lower level templates

Lower level templates can be used when you want to unify the format of your entire wiki.

For example, by creating the following template at the top level, you can create a page template that always displays the child page list at the top of the page.

The notation `$lsx()` is from [weseek/growi-plugin-lsx](https://github.com/weseek/growi-plugin-lsx).

```markdown
# Related pages

$lsx()

#
```

## How to insert a template on a page-by-page basis

GROWI also allows you to insert templates for individual pages.

First, open the edit screen and click on the template icon in the lower left corner.

<img :src="$withBase('/assets/images/en/template_04.png')" alt="template_04">

Select the template you want to create from the dialog that appears, and click the Insert button.

<img :src="$withBase('/assets/images/en/template_05.png')" alt="template_05">

<img :src="$withBase('/assets/images/en/template_06.png')" alt="template_06">

These templates can be increased by applying the GROWI plugin to increase the number of templates that can be selected.

Please click [here](/en/admin-guide/management-cookbook/plugins.html) to check how to add a template.
