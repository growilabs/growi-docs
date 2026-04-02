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

### Default Mode

#### Basic Operations

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

#### Text Formatting

| Action | Key |
|---|---|
| Bold | `Ctrl` + `B` |
| Italic | `Ctrl` + `Shift` + `I` |
| Strikethrough | `Ctrl` + `Shift` + `X` |
| Inline code | `Ctrl` + `Shift` + `C` |
| Hyperlink | `Ctrl` + `Shift` + `U` |

#### Line Settings

| Action | Key |
|---|---|
| Numbered list | `Ctrl` + `Shift` + `7` |
| Bulleted list | `Ctrl` + `Shift` + `8` |
| Blockquote | `Ctrl` + `Shift` + `9` |
| Code block | `Ctrl` + `Alt` + `Shift` + `C` |
| Comment out | `Ctrl` + `/` |

#### Additional Shortcuts

These shortcuts are not shown in the shortcut modal, but are available in the editor.

| Action | Key |
|---|---|
| Undo | `Ctrl` + `Z` |
| Redo | `Ctrl` + `Y` (or `Ctrl` + `Shift` + `Z`) |
| Select all | `Ctrl` + `A` |
| Increase indent | `Ctrl` + `]` |
| Decrease indent | `Ctrl` + `[` |
| Go to matching bracket | `Ctrl` + `Shift` + `\` |
| Toggle block comment | `Alt` + `A` |

### Vim Mode

When Vim keymap is selected in the editor settings, Vim keybindings are available.

#### Key Vim Commands

| Category | Commands |
| --- | --- |
| Movement | `h` `j` `k` `l`, `w` `b` `e`, `0` `$`, `gg` `G`, etc. |
| Editing | `d` `c` `y` `p`, `x` `r` `J` `.`, etc. |
| Search | `/` `?` `n` `N` `*` `#` |
| Mode switching | `i` `a` `o` `I` `A` `O`, `v` `V` `Ctrl+V`, `Esc` |
| Macros | `q` `@` |
| Ex commands | `:s`, `:g`, etc. |

#### GROWI-Specific Customizations

| Action | Key |
| --- | --- |
| Exit insert mode | `J` `J` (or `J` `K`) |
| Save | `:w` |
| Bold | `Ctrl` + `Shift` + `B` |

:::tip
In Vim mode, `Ctrl` + `B` is used for page scrolling,
so the bold shortcut is changed to `Ctrl` + `Shift` + `B`.
All other formatting and line setting shortcuts remain the same as Default mode.
:::

### Emacs Mode

When Emacs keymap is selected in the editor settings, Emacs keybindings are available.

#### Key Emacs Commands

| Category | Commands |
| --- | --- |
| Cursor movement | `Ctrl+F/B/N/P`, `Ctrl+A/E`, `Alt+F/B`, etc. |
| Text editing | `Ctrl+K`, `Ctrl+D`, `Ctrl+T`, `Alt+D`, `Alt+U/L`, etc. |
| Kill ring | `Ctrl+W` (kill), `Alt+W` (copy), `Ctrl+Y` (yank), `Alt+Y` (rotate) |
| Mark & selection | `Ctrl+Space`, `Ctrl+X H` |
| Search | `Ctrl+S` (search), `Ctrl+R` (reverse), `Shift+Alt+5` (replace) |
| Undo | `Ctrl+/`, `Ctrl+Z` |

:::tip
In Emacs mode, some Default mode shortcuts are overridden by Emacs keybindings.
For example, `Ctrl` + `S` becomes search instead of save.
Formatting and line setting shortcuts remain the same as Default mode.
:::

### VSCode Mode

When VSCode keymap is selected in the editor settings,
VSCode-specific keybindings are added on top of Default mode shortcuts.

#### Key VSCode Commands

| Category | Commands |
| --- | --- |
| Multiple cursors | `Ctrl+Alt+↑/↓`, `Ctrl+D`, `Ctrl+Shift+L`, `Shift+Alt+I` |
| Code folding | `Ctrl+Shift+[/]`, `Ctrl+K Ctrl+0/J` |
| Comments | `Ctrl+/`, `Shift+Alt+A`, `Ctrl+K Ctrl+C/U` |
| Line operations | `Ctrl+L` (select), `Ctrl+]/[` (indent) |
| Navigation | `Ctrl+G` (go to line), `Ctrl+Shift+\` (bracket) |
| Completion | `Ctrl+Space` |

:::tip
Formatting and line setting shortcuts remain the same as Default mode.
:::
