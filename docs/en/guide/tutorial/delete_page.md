# Delete page

As your wiki becomes larger, you may want to delete unnecessary pages to clean up your wiki.

## Delete one page

Go to the page you want to delete and select "Delete" in the menu shown in the image below.

<img :src="$withBase('/assets/images/delete1.png')" alt="delete1">

In the delete menu, you will see the options

- Delete child pages recursively.

- Delete Completely

Each option has a check box, and Delete child pages recursively is selected by default.

[//]: <> (TODO: Delete child pages recursivelyのサブタイトルは英語が間違っています。「of」か「under」一つ使って、残りを消す)
<img :src="$withBase('/assets/images/delete2.png')" alt="delete2">

If you press the "Delete" button on a page that has no child pages, that page will be moved to the trash.

Now when you view the page you will see a trash can mark at the top of the page hierarchy path, and the message "This page is in the trash".

<img :src="$withBase('/assets/images/delete3.png')" alt="delete3">

After deletion, the page no longer appears in its former hierarchy.

<img :src="$withBase('/assets/images/delete4.png')" alt="delete4">

## Find deleted pages in the trash

Click "Deleted pages" in the menu that appears by clicking your username in the header.

<img :src="$withBase('/assets/images/delete5.png')" alt="delete5">

You will see the list of deleted pages under "/trash" as shown in the image below.

<img :src="$withBase('/assets/images/delete6.png')" alt="delete6">

Clicking on a deleted page in the list will open the deleted page with a "Put Back" button and "Delete Completely" button.

<img :src="$withBase('/assets/images/delete3.png')" alt="delete3">

Deleted pages cannot be edited.
Click "Put Back" first if you want to edit.

## Delete completely

You can permanently delete the page by clicking "Delete completely".

<img :src="$withBase('/assets/images/delete3.png')" alt="delete3">

You can also permanently delete a page by selecting the
"Delete completely" checkbox when deleting a page.

<img :src="$withBase('/assets/images/delete7.png')" alt="delete7">

"Page is not found" will be displayed if you try to view a page which has been completely deleted.

<img :src="$withBase('/assets/images/delete11.png')" alt="delete11">

## Delete child pages recursively

When deleting a page, you can also recursively delete all child pages at the same time.

Here is an example page list:

<img :src="$withBase('/assets/images/delete8.png')" alt="delete8">

Select the "/tutorial" page, then delete it with "Delete child pages recursively" checked.

<img :src="$withBase('/assets/images/delete9.png')" alt="delete9">

<img :src="$withBase('/assets/images/delete10.png')" alt="delete10">

As you can see from the parent page's page hierarchy, if you delete the "/tutorial" page with child pages deleted recursively, the pages under the "/tutorial" page will also be deleted.

<img :src="$withBase('/assets/images/delete12.png')" alt="delete12">
