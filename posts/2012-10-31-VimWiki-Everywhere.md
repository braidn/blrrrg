---
title: Vimwiki is Everywhere
date: '2012-10-31'
---

Confused about Vim, wiki's, or Google? [You are welcome][1]. Although
vimwiki is a wiki implementation within Vim, it passes off a lot of cool
things that bleed into [markdown][2] based writing. However, it often
only works on .md files. This is a pain point since some things use
.markdown files ([gollum][3]) or .mdown files. Vim will filetype highlight
things using both of these filetypes however it won't sugar it up with
Vimwiki syntax.

Wrong...well, sorta. Vimwiki drags around a couple of config flags that
can be used to syntax-up Vim when using all types of common markdown
extensions. And....:

`let g:vimwiki_ext2syntax = {'.md',: 'markdown', '.markdown':
'markdown', '.mdown': 'markdown'}`
[gist][4]

Boom! Vimwiki syntax in all your markdown files. Be happy, write in
markdown.

[1]: https://code.google.com/p/vimwiki/
[2]: http://daringfireball.net/projects/markdown/syntax
[3]: https://www.ohloh.net/p/gollum-wiki
[4]: https://gist.github.com/3989510
