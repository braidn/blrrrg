---
title: Vim Setup Changes in 2020
date: '2020-08-01'
---

It's been such a long time since talking about my Vim setup.
This coupled with three fairly large changes throughout the year,
has completely changed the way I utilize the little editor that [no one can quit][quit].
As a caveat for people reading,
2020 will mark my 19th year using Vim as a way to manipulate text.
I can't even think of another program that I have used for half that amount of time.

The three main changes that have come about this year all revolve around exploration,
namely exploring these three things:

1. Files
1. Tasks
1. Versioning

### Files

When it comes to exploring files,
I almost always have been a Netrw fan.
It's built in,
historically it's been pretty fast,
and although it has arcane defaults,
it's something that a developer can always count on being in Vim.
Due to all of this,
there's never been any real need to look for a file tree replacement.
Until recently.

[Neovim][nvim] recently released their own [Language Server][lang]
and to use it,
one needs to run a nightly build of Neovim itself (for now).
These builds often times are quite buggy and have been doubly so with Netrw.
Often times the whole Netrw experience becomes broken when refocusing the specific pane.

Since Language Servers do make programming a much better experience these days,
I decided to branch out and look for an alternative that wasn't [NerdTree][tree].
One of the main criteria behind the alternate file tree is that it needed to be very fast.
This is often not the case with NerdTree or other trees that depend on third party installs.
Namely, [LF][lft], [NNN][nnnt], or [Ranger][rtre].

After spending a good amount of time sifting through /r/vim and /r/neovim on reddit,
I landed on a [Lua][lua] powered Neovim specific package named '[nvim-tree][nvtr]'.
Due to Neovim [having lua built in][lunv],
plugins written in Lua act like first class citizens.
Not to mention,
they are light years easier to build and debug over the dreaded [VimScript][vsct].

The use of file trees is fairly temprered due to fuzzy file finding but,
they do come in handy,
especially when orienting one's self around a new project/microservice/whatever.

### Tasks




[quit]: https://github.com/hakluke/how-to-exit-vim

[tree]: https://github.com/preservim/nerdtree

[nvim]: https://neovim.io/

[lang]: https://en.wikipedia.org/wiki/Language_Server_Protocol

[lft]: https://github.com/gokcehan/lf

[nnnt]: https://github.com/jarun/nnn

[rtre]: https://github.com/ranger/ranger

[lua]: https://www.lua.org/

[nvtr]: https://github.com/kyazdani42/nvim-tree.lua

[lunv]: https://neovim.io/doc/user/lua.html

[vsct]: https://learnvimscriptthehardway.stevelosh.com/
