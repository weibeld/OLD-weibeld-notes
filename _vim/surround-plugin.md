---
title:  Surrounding Text With surround.vim
author: Daniel Weibel
date:   6 January 2017
last_updated: 31 October 2017
---

Often one wants to surround one or more words in an existing text with a certain character. For example, to put something in quotes (`yes` to `"yes"`), make it italic in Markdown (`italics` to `*italics*`) or bold (`bold` to `**bold**`).

This is very tedious to do manually, as it involves moving the cursor to the beginning of the text to surround, inserting the character(s), moving the cursor to the end of the text to surround, and inserting the same character(s) again.

The [surround.vim](https://github.com/tpope/vim-srround) plugin targets exactly this use case. It allows to surround a piece of text with a single command.

# Usage

## Adding Surroundings 

- First of all, the commands of surround.vim are relative to the cursor position, thus, on must first **move the cursor** onto the piece of text to surround.
- The command prefix to add surroundings is `ys`.
- `ys` must be followed by a specification of the **piece of text** to surround (relative to the current cursor position).
    - For example, `ysw` specifies the text from the current cursor position to the end of the word under the cursor.
    - More useful is `ysiw`, which specifies the **entire word** under the cursor, no matter whether the cursor is at the beginning of the word or in the middle of it
    - To specify multiple words, use `ysXaw`, where `X` is the number of words to surround. For example, `ys3aw` specifies three words, starting with the word under the cursor.
    - To specify the entire line, use `yss`
- As soon as the above specification has been typed, the cursor disappears from the text, and the Vim command line prompts for an input. Now you have to enter the **character** with which to surround the specified text.
    - For example, `*` surrounds the specified text with `*` (so the entire command might be `ysiw*`)
    - For parentheses, use `)`, `]`, `}`, this inserts left and right parentheses appropriately
    - It is possible to specify HTML/XML tags. To surround the specified text with the `<em>` tag, just type `<em>`, and the opening and closing tags `<em>` and `</em>` are inserted appropriately. For example, to enclose three words in  an `<em>` tag, the entire command is `ys3aw<em>`. To wrap an entire line in a `<p>` tag, the command is `yss<p>`.

## Deleting Surroundings

- To delete the surroundings of a text area, simply move the cursor anywhere inside this text area, and type `ds` followed by the surrounding character
  - For example, `ds*` deletes the innermost `*` surroundings (if any) of the text under the cursor
  - For deleting HTML/XML tags, simply use `t`. No need to type the exact tag to delete. So, `dst` deletes the innermost HTML/XML tag pair of the text under the cursor, no matter what the type of this tag pair is.

## Changing Surroundings

- To change existing surroundings, move the cursor anywhere inside the surrounded text, type `cs` followed by the **existing** type of surrounding, followed by the desired **new** type of surrounding
    - For example, `cs*_` changes the innermost `*` surroundings (if any) of the text under the cursor to `_` surroundings
    - For specifying an HTML/XML tag as the *existing* type of surrounding, use `t` (as in [Deleting Surroundings](#deleting-surroundings))
    - For specifying an HTML/XML tag as the *new* type of surrounding, type the entire tag (as in [Adding Surroundings](#adding-surroundings))
    - For example, `cst*` changes the innermost HTML/XML tag pair to a simple `*` surrounding, `cs*<p>` changes the simple `*` surrounding to a `<p>` tag pair, and `cst<div>` changes the innermost HTML/XML tag (whatever type of tag it is) to a `<div>` tag.


# Notes

- Except for HTML/XML tags, it is only possible to specify a **single character** as the surrounding. For example, to surround a word with `**` (e.g. to make it bold in Markdown), it is **not** possible to type `ysiw**`, because the plugin terminates listening for input after the first `*`. A way around this specific case is to first execute `ysiw*`, and then repeat this command with the Vim `.` operator. 
- Another way to specify the text to surround is to select it in **visual mode**, and then typing `S` (instead of directly typing `ys` in normal mode as in the method described above). Everything else works the same with this method.
    - For example, `viw` selects the word under the cursor in visual mode, and then typing `S*` surrounds it with `*`. The effect of `viwS*` is same as `ysiw*`.

# For Emacs

There exists a port of the surround.vim plugin to Emacs's [Evil mode](https://github.com/emacs-evil/evil) as an Emacs package called [evil-surround](https://github.com/tpope/vim-surround). The usage is the same as in the original Vim plugin.

It can be installed in Emas with `M-x package-install RET evil-surround`.
