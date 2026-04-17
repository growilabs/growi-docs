# Page Template

Start from the skeletons below. Delete any section with nothing to say (except `## 目次` / `## Table of Contents`, which is always present).

## Japanese skeleton — `docs/ja/admin-guide/upgrading/NNx.md`

```md
# GROWI vX.Y.x へのアップグレード

<!-- 1〜3文の概要。このマイナー系列の目玉変更を述べる。 -->


## 目次

[[toc]]


<!-- (任意) 利用者・管理者双方に関わる横断的な「廃止」や「仕様変更」はここに。なければ削除 -->


## 利用者向け

### [タグ] 見出し

本文...


## 管理者向け

### [タグ] 見出し

本文...

<ContextualBlock context="docs-growi-org">

### [タグ] 自前ホスト向けの項目

本文...

</ContextualBlock>


## アップグレード前にチェックすべきこと

<ContextualBlock context="docs-growi-org">

- [x] ...

</ContextualBlock>

<ContextualBlock context="help-growi-cloud">

- [x] ...
<!-- 確認事項がなければ「なし」と書く -->

</ContextualBlock>


<ContextualBlock context="help-growi-cloud">

## アップグレード後にチェックすべきこと

- [x] ...

</ContextualBlock>
```

## English skeleton — `docs/en/admin-guide/upgrading/NNx.md`

```md
# Upgrading to GROWI vX.Y.x

<!-- 1–3 sentences summarizing the headline change of this minor series. -->


## Table of Contents

[[toc]]


<!-- (optional) Cross-cutting deprecations/changes that affect both users and admins go here. Delete the section if empty. -->


## For Users

### [Tag] Heading

Body...


## For Administrators

### [Tag] Heading

Body...

<ContextualBlock context="docs-growi-org">

### [Tag] Self-hosted-only item

Body...

</ContextualBlock>


## Things to Check Before Upgrading

<ContextualBlock context="docs-growi-org">

- [ ] ...

</ContextualBlock>

<ContextualBlock context="help-growi-cloud">

- [ ] ...

</ContextualBlock>


<ContextualBlock context="help-growi-cloud">

## Check after upgrading

- [ ] ...

</ContextualBlock>
```

## Heading vocabulary reference

Do not improvise these translations. The repo has used the same phrasings across versions and the site's table-of-contents renders them identically.

| ja | en |
| :--- | :--- |
| `## 目次` | `## Table of Contents` |
| `## 利用者向け` | `## For Users` |
| `## 管理者向け` | `## For Administrators` (also seen: `## For Admin`) |
| `## 開発者向け` | `## For Developers` |
| `## アップグレード前にチェックすべきこと` | `## Things to Check Before Upgrading` (also seen: `## Check before upgrading`) |
| `## アップグレード後にチェックすべきこと` | `## Check after upgrading` |

## Tables for version support changes

Use three-column alignment with `:---:`:

```md
| GROWI | <= v7.2.x | v7.3.x |
| :---: | :---: | :---: |
| MongoDB | 6.x, 7.x | 6.x, 7.x, 8.x |
```

## Checkboxes in check-lists

Use `- [x]` (checked) when the item is something the reader should verify whether their system matches. This matches the house style — not `- [ ]`. Sub-items are indented 4 spaces.
