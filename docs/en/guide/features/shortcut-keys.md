# Keyboard Shortcuts

A complete list of keyboard shortcuts available in GROWI.

You can display the shortcut list at any time by pressing `Ctrl + /`.

## Global Shortcuts

These shortcuts are available on any screen, whether you are viewing a page or using the editor.

| Action | Key |
|---|---|
| Show/Hide shortcut help | `Ctrl` + `/` |
| Create page | `C` |
| Edit page | `E` |
| Search | `/` |

### Easter Eggs

| Action | Key |
|---|---|
| Show contributors | `↑` `↑` `↓` `↓` `←` `→` `←` `→` `B` `A` |
| Mirror mode | `X` `X` `B` `B` `A` `Y` `A` `Y` `↓` `←` |

## Editor Shortcuts

These shortcuts are available while the editor is open.

| Action | Key |
|---|---|
| Find in editor | `Ctrl` + `F` |
| Save | `Ctrl` + `S` |
| Indent | `Tab` |
| Outdent | `Shift` + `Tab` |
| Delete line | `Ctrl` + `Shift` + `K` |
| Insert line (post comment) | `Ctrl` + `Enter` |
| Move line | `Alt` + `↓` or `↑` |
| Copy line | `Alt` + `Shift` + `↓` or `↑` |
| Multiple cursors | `Ctrl` + `Alt` + `↓` or `↑` (or `Alt` + Click) |

## Text Formatting (Editor)

| Action | Key |
|---|---|
| Bold | `Ctrl` + `B` |
| Italic | `Ctrl` + `Shift` + `I` |
| Strikethrough | `Ctrl` + `Shift` + `X` |
| Inline code | `Ctrl` + `Shift` + `C` |
| Hyperlink | `Ctrl` + `Shift` + `U` |

## Line Settings (Editor)

| Action | Key |
|---|---|
| Numbered list | `Ctrl` + `Shift` + `7` |
| Bulleted list | `Ctrl` + `Shift` + `8` |
| Blockquote | `Ctrl` + `Shift` + `9` |
| Code block | `Ctrl` + `Alt` + `Shift` + `C` |
| Comment out | `Ctrl` + `/` |

## Additional Editor Shortcuts

These shortcuts are not shown in the shortcut modal, but are available in the editor.

| Action | Key |
|---|---|
| Undo | `Ctrl` + `Z` |
| Redo | `Ctrl` + `Y` (or `Ctrl` + `Shift` + `Z`) |
| Select all | `Ctrl` + `A` |

## Vim Mode

When Vim keymap is selected in the editor settings, Vim keybindings are available.
In addition to standard Vim commands, the following GROWI-specific customizations apply:

| Action | Key |
|---|---|
| Exit insert mode | `J` `J` (or `J` `K`) |
| Save | `:w` |
| Bold | `Ctrl` + `Shift` + `B` (since `Ctrl` + `B` is used for page scroll in Vim) |

:::tip
In Vim mode, `Ctrl` + `B` is used for page scrolling,
so the bold shortcut is changed to `Ctrl` + `Shift` + `B`.
All other formatting and line setting shortcuts remain the same as default.
:::

## Emacs Mode

When Emacs keymap is selected in the editor settings, Emacs keybindings are available.

### Cursor Movement

| Action | Key |
|---|---|
| Previous character | `Ctrl` + `B` |
| Next character | `Ctrl` + `F` |
| Previous line | `Ctrl` + `P` |
| Next line | `Ctrl` + `N` |
| Beginning of line | `Ctrl` + `A` |
| End of line | `Ctrl` + `E` |
| Previous word | `Alt` + `B` |
| Next word | `Alt` + `F` |
| Beginning of document | `Shift` + `Alt` + `<` |
| End of document | `Shift` + `Alt` + `>` |
| Go to line | `Alt` + `G` |

### Text Editing

| Action | Key |
|---|---|
| Kill to end of line | `Ctrl` + `K` |
| Delete next character | `Ctrl` + `D` |
| Kill next word | `Alt` + `D` |
| Kill previous word | `Alt` + `Backspace` |
| Split line | `Ctrl` + `O` |
| Transpose characters | `Ctrl` + `T` |
| Uppercase | `Alt` + `U` |
| Lowercase | `Alt` + `L` |

### Selection, Copy & Paste

| Action | Key |
|---|---|
| Set mark | `Ctrl` + `Space` |
| Kill region | `Ctrl` + `W` |
| Copy region | `Alt` + `W` |
| Yank (paste) | `Ctrl` + `Y` |
| Yank rotation | `Alt` + `Y` |
| Select all | `Ctrl` + `X` → `H` |

### Search

| Action | Key |
|---|---|
| Search | `Ctrl` + `S` |
| Reverse search | `Ctrl` + `R` |
| Replace | `Shift` + `Alt` + `5` |

### Undo & Comments

| Action | Key |
|---|---|
| Undo | `Ctrl` + `/` (or `Ctrl` + `Z`) |
| Redo | `Shift` + `Ctrl` + `/` (or `Shift` + `Ctrl` + `Z`) |
| Toggle comment | `Alt` + `;` |
| Cancel | `Ctrl` + `G` |

## VSCode Mode

When VSCode keymap is selected in the editor settings, VSCode keybindings are available.

### Editing

| Action | Key |
|---|---|
| Delete line | `Ctrl` + `Shift` + `K` |
| Move line down | `Alt` + `↓` |
| Move line up | `Alt` + `↑` |
| Copy line down | `Alt` + `Shift` + `↓` |
| Copy line up | `Alt` + `Shift` + `↑` |
| Select line | `Ctrl` + `L` |
| Increase indent | `Ctrl` + `]` |
| Decrease indent | `Ctrl` + `[` |

### Multiple Cursors & Selection

| Action | Key |
|---|---|
| Add cursor above | `Ctrl` + `Alt` + `↑` |
| Add cursor below | `Ctrl` + `Alt` + `↓` |
| Add cursor to each selection line | `Shift` + `Alt` + `I` |
| Select next occurrence | `Ctrl` + `D` |
| Select all occurrences | `Ctrl` + `Shift` + `L` |

### Search & Navigation

| Action | Key |
|---|---|
| Find | `Ctrl` + `F` |
| Go to line | `Ctrl` + `G` |
| Go to matching bracket | `Ctrl` + `Shift` + `\` |

### Code Folding

| Action | Key |
|---|---|
| Fold | `Ctrl` + `Shift` + `[` |
| Unfold | `Ctrl` + `Shift` + `]` |
| Fold all | `Ctrl` + `K` → `Ctrl` + `0` |
| Unfold all | `Ctrl` + `K` → `Ctrl` + `J` |

### Comments

| Action | Key |
| --- | --- |
| Toggle line comment | `Ctrl` + `/` |
| Toggle block comment | `Shift` + `Alt` + `A` |
| Add line comment | `Ctrl` + `K` → `Ctrl` + `C` |
| Remove line comment | `Ctrl` + `K` → `Ctrl` + `U` |

### Undo & Completion

| Action | Key |
| --- | --- |
| Undo | `Ctrl` + `Z` |
| Redo | `Ctrl` + `Y` (or `Ctrl` + `Shift` + `Z`) |
| Select all | `Ctrl` + `A` |
| Start completion | `Ctrl` + `Space` |
