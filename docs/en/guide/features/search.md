# Search pages

<ContextualBlock context="docs-growi-org">

:::warning
To use this function, setting up Elasticsearch as a search-engine database is required. Check [this](/en/admin-guide/management-cookbook/setup-search-system.html) page to find out how.
:::

</ContextualBlock>

You can open the search modal by clicking the magnifying glass icon on the navigation bar.

<img :src="$withBase('/assets/images/en/search1.png')" alt="search1">

You can search pages by page path, body, or tags by typing keywords in the search bar within the modal.

<img :src="$withBase('/assets/images/en/search2.png')" alt="search2">

You can select "all pages," "only child pages under this hierarchy," or "only pages that contain the exact text matching the keyword" as the search target.  
Note that when you enter a keyword, candidates for the corresponding page will be displayed, so you can also access the page directly from the page candidates.

<img :src="$withBase('/assets/images/en/search3.png')" alt="search3">

## Search Results Page

Enter keywords in the search modal and press Enter(return) to move to the search results list page as shown below.

<img :src="$withBase('/assets/images/en/search4.png')" alt="search4">

- List of page names
  - On the left side of the screen, a list of page names found in the search is displayed.
  - To the left of the page name, the profile image of the person who last updated the page is displayed.
  - Clicking on a page name displays a preview of the page on the right side of the screen.
  - On the right side of the page name, meta information such as the number of likes, comments, and public scope of the page will be displayed as icons.
    - The display of pages with restricted public access can be configured in the security settings of the administration page.
  - You can batch delete pages marked with a check mark by pressing the "Delete check mark" button at the top of the list.

- Page Preview
  - On the right side of the screen, a preview of the page paths found in the search is displayed.
  - Clicking on a page name will take you to that page.
  - The tags that the page has are also displayed.
  - If you do not have permission to view the page, the preview will not be displayed.


### Search Options

When searching, options can be specified with the following notation. Options can be used together.

| Options                         | Summary                                                                                                                                                                                              |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                    |                                                                                                                                                                                                    |
| Search by multiple keywords         | If you specify multiple words with a space between them, it will search for pages that contain all of them in the page name or body text.<br />For example, `word1 word2` will search for pages that contain both `word1` and `word2` in the page name or body.   |
| Search pages that contain specified sentences in the body | When you insert a sentence in a double quote, it searches for pages that include that sentence in the body of the text.<br />For example, `"This is GROWI"` will search for pages that contain `This is GROWI` in the body.                               |
| Exclusion by Keyword               | A hyphen `-` followed by a keyword will exclude pages that contain that keyword in the page name or body.<br />For example, `-keyword` will exclude pages that contain `keyword` in the page name or body.  |
| Search by page name first match.       | If you specify `prefix:` followed by a page name, pages starting with that page name will be searched. <br />For example, `prefix:/user/` will search for pages whose page name starts with `/user/`.                       |
| Exclude by matching the beginning of a page name.       | If you specify `-prefix:` followed by a page name, pages starting with that page name are excluded. <br /> For example, `-prefix:/user/` will exclude pages whose page name starts with `/user/`.                        |
| Search by tag                     | If you specify a tag after `tag:`, pages containing that tag will be searched.  <br />For example, `tag:wiki` will search for pages with the tag `wiki`.                                                      |
| Exclude by tag                    | If you specify a tag after `-tag:`, pages containing that tag will be excluded.  <br />For example, `-tag:wiki` will exclude pages with the tag `wiki`.                                                       |
<!-- textlint-disable weseek/no-doubled-conjunction -->
<!-- textlint-disable weseek/ja-no-mixed-period -->

### How to search pages in GROWI v6 series and earlier

You can search pages by page path, text, or tags from the search bar on the navigation bar. (If the environment for searching is not yet completed, it will not be displayed.)

<img :src="$withBase('/assets/images/en/search5.png')" alt="search5">

When you enter a keyword in the search bar, you will see a list of suggested pages whose page paths partially match the keyword, as shown below. You can access pages from these suggestions.

In addition, by pressing the magnifying glass icon in the search bar or the Enter(return) key, a list of pages that contain the keyword in the page path or in the text will be displayed. At this time, you can change the search range by selecting "all pages" or "child pages below this level" from the drop-down menu on the left side of the search bar.

<img :src="$withBase('/assets/images/en/search6.png')" alt="search6">
