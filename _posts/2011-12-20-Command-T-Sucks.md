---
title: Get Rid Of Command T
layout: post
---

Hardcore text editors always seem to make a concerted effort to actually ease
the opening of different files. Perhaps the most elegant solution was
implemented by [Textmate][macromates] by hitting Command-T. A drawer would open
from the top of the window, the user could begin typing in the name of a file
and eventually hit enter to open it. Other editors have exibited this
functionality and the guys and gals at [PeepCode][peepcode] even built a handy
app that sits in your menu bar to do the same thing.

If you were a Vim/MacVim/GVim user you had one of two choices to mimic this
functionality.

1. Use the PeepOpen application which is pretty cool and definitely worth the
	 money, although it requires a plugin to function with Vim
1. Use a plugin ([Vimball][vim] in this case) named Command-T

The issue with Command-T came down to the fact that it needed to be compiled
with the system Ruby and so did your version of MacVim. Well, that's cool, most
people are ok with using OS X's version of Ruby because it is up-to-date…wait,
nope! For the intelligent person using [RVM][beginrescueend] or
[RBENV][github], you needed to make sure to switch off from Ruby 1.9.2 and back
to the system ruby when updating MacVim via [Homebrew][github 2] or compiling
the [source][github 3].

All of this was a serious pain in the ass, trip-plicated by the fact that
MacVim is yet to see a golden, stable release for 10.7. In the most simple of
cases, plugins can be installed by throwing a couple of files and a doc
file(help text) into their respected folders. This action is what makes using
[Janus][github 4](Yes I know it is somewhat frowned upon but I don't happen to
care, [sorry][bp]) such an easy package manager. However, if you look how [it
handles][github 5] Command-t you should be instantly filled with complex waves
of hatred or…at least [this][youtu].

Enter [CTRLP][github 6]! An elegant and easily installable solution that could
care less about your Ruby implementation. After just a day and a half of random
playing, I am thoroughly impressed and suspect that Command-T won't make it's
way back into my [Vim belt][the-joke-box]. Although, I have massive respect for
the Vim user who keeps trying to wrestle the beast.

Download CTRLP from the [githubs][github 6], add it to your .janus.rake file
with:  <script src="https://gist.github.com/2644583.js?file=old
style"></script> ...or use your Vim package manager of choice.

[beginrescueend]: https://rvm.beginrescueend.com/
[bp]: http://1.bp.blogspot.com/_wb8bAl1P-N0/R_5tFHW0prI/AAAAAAAAB-4/YWb6ZKvtFTY/s1600/haters-1.jpg
[github]: https://github.com/sstephenson/rbenv
[github 2]: http://mxcl.github.com/homebrew/
[github 3]: https://github.com/b4winckler/macvim
[github 4]: https://github.com/carlhuda/janus
[github 5]: https://github.com/carlhuda/janus/blob/master/Rakefile
[github 6]: https://github.com/kien/ctrlp.vim
[macromates]: http://macromates.com/
[peepcode]: http://peepcode.com/products/peepopen
[the-joke-box]: http://www.the-joke-box.com/pictures/tomahawk-utility-belt.jpg
[vim]: http://www.vim.org/scripts/script.php?script_id=1502
[youtu]: http://youtu.be/-JFfN5pKzFU
