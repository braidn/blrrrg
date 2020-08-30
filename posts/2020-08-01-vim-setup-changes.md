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

1.  Files
2.  Tasks
3.  Versioning

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

When folks think about running tasks in Vim/Neovim,
they often reach for tools like [ALE][ale].
Linting and file fixing is usually what most folks want to do when hitting the save button.
Although ALE runs asynchronously,
it tends to be a tremendous resource hog.

All those fans spinning makes Vim,
feel way more like an IDE than it should.
In addition,
ALE is constantly underlining problems and stealing a programmers focus away from their process of 'building'.

VSCode has a wonderful concept of [build tasks][bld] which are often times used to actually build projects.
However, this tool is more of a project runner than **just** a way to build a project.
This allows users to run linters and formatters on their own time.

With Vim there used to be no great way of doing this but,
recently a new project has popped up called [asynctasks][atask].
It's a way to define these build tasks and load them throughout a file system/project.
The task definitions are powerful enough to specific to a file type.
If that isn't flexible enough,
there is the ability to have profiles per task, per file type!

Utilizing this task based approach,
Vim remains devoid of little red lines that steal a programmer from focusing on what matters.
During a break,
it allows a programmer to lint, build, and fix any issues that have crept up along the way.
This process makes Vim much more 'pure' to me and injects a lot less 'chrome' around the Vim UI.
Instead, displaying issues directly in the quick open window.
This again allows the programmer to pay attention to them or close the quick open window and get back to focusing the problem at hand.

\###GIT

Last large change for the moment is the move from [Fugitive][fug] to [Gina][gina].
Both of these plugins provide a GIT like integration into Vim buffers.
However,
over the years, and especially with the move to Neovim,
having asynchronous tasks has become a huge win to my productivity.

Gina's built around this notion of asynchronous interactions with a GIT repo which makes it super snappy.
It also has a small cognitive mapping load and a single command.
All of this creates a simple interface to an otherwise not simple CLI tool.

Honestly there was nothing really wrong with Fugitive and
my move to Gina wasn't a result of a failure in Figitive.
One of the tennants of my Vim usage throughout 2020 is to 'remove the chrome'.
What this really means is removing UI bits that attempt to mimic ideas in other editors or IDE's.
I want vim to be a place to write prose and build software.
There is no need to be able to communicate with peers in Slack through Vim,
or move cards around in a specific Kanban board.

All of these changes edge, nudge, pivot my usage of Vim back to when I picked the little editor up (way back in 1994).
And all three of these I have been using for almost three months now with no looking back.

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

[ale]: https://github.com/dense-analysis/ale

[bld]: https://code.visualstudio.com/Docs/editor/tasks

[atask]: https://github.com/skywind3000/asynctasks.vim

[fug]: https://github.com/tpope/vim-fugitive

[gina]: https://github.com/lambdalisue/gina.vim
