# Section Tag Conventions

Every subsection under `## 利用者向け` / `## 管理者向け` opens with a bracketed tag that signals the kind of change. The reader scans these tags to decide what they need to act on, so tags must be chosen carefully and consistently.

## The core tag vocabulary

| Japanese | English | Meaning | Typical content |
| :--- | :--- | :--- | :--- |
| `[新機能]` | `[New Feature]` | Something that did not exist before | New AI feature, new auth method, new admin page |
| `[改善]` | `[Improvement]` | Existing behavior got better, no action needed | Performance uplift, UI polish, more tolerant parser |
| `[仕様変更]` | `[Specification Change]` | Behavior changed in a way users will notice | Default value flipped, UI reorganized, semantics shifted |
| `[廃止]` | `[Deprecated]` | A feature/option/API has been removed | Env var removed, feature toggle gone, integration dropped |
| `[廃止を伴う仕様変更]` | `[Specification Change with Deprecation]` | The change simultaneously removes an old thing and introduces a new one | Package manager swapped from yarn to pnpm |
| `[サポート追加]` | `[Support Added]` | Newly supported runtime/dependency version | Node.js 22 support, MongoDB 8 support |
| `[要対応]` | `[Action Required]` | The admin must do something, or the system breaks / loses functionality | New IAM permission needed, mandatory data migration |

## Combining tags

If a change is both a type (e.g. spec change) *and* requires operator action, stack the most-critical tag first. In practice the codebase favors either:

- Put `[要対応]` alone if the action is what the reader needs to notice (e.g. `### [要対応] S3 アップロード方式の変更に伴う IAM 権限追加` in `75x.md`)
- Combine with a hyphen: `[廃止を伴う仕様変更]` when both halves are essential

Do not invent new tags outside this list without a strong reason. If nothing fits, prefer `[仕様変更]` over a novel tag.

## Ordering within an audience section

Within `## 管理者向け`, order subsections roughly by urgency to the reader:

1. `[要対応]` items first — these are the ones that will break things
2. `[廃止]` / `[廃止を伴う仕様変更]` — these may break things silently later
3. `[仕様変更]` — behavior changes the admin should know about
4. `[サポート追加]` — runtime/dependency expansions
5. `[新機能]` — opt-in additions
6. `[改善]` — purely positive changes

Within `## 利用者向け`, order by visibility / impact. `[新機能]` usually leads, followed by `[改善]`. End-user sections rarely contain `[要対応]`.

## Examples from the repo

- `### [要対応] S3 アップロード方式の変更に伴う IAM 権限追加` (75x.md) — admin must add an IAM permission
- `### [廃止] esa.io および Qiita:Team からのインポート機能` (74x.md) — feature removed
- `### [改善] ページ表示・ページ遷移のパフォーマンスアップ` (74x.md) — user-visible perf win, no action
- `### [サポート追加] Node.js v22 のサポート` (73x.md) — runtime added
- `### [廃止を伴う仕様変更] パッケージマネージャー・タスクランナーの変更` (71x.md) — yarn removed, pnpm introduced

## Anti-patterns to avoid

- Using `[Update]` / `[更新]` — pick `[改善]` or `[仕様変更]`
- Using `[Breaking Change]` / `[破壊的変更]` — express it as `[要対応]` (if the admin must act) or `[仕症変更]` (if behavior just changes)
- Omitting the tag entirely — every admin/user subsection needs one
