---
title: New Development Workflows
date: '2019-09-01'
---

Editing text in Vim is becoming a bit of a thing of the past these days. 
Non-modal editors, the likes of VSCode bring a wonderful development workflow, 
[amazing tooling][tool], and even fairly 'good' [Vim keybindings][vimVs]. 
The one thing that VSCode falls flat on though is the wonderful terminal integration that Vim provides. 
For yours truly, this integration has always come in the form of TMUX. 


Retooling TMUX's keybindings to seemingly flow from Vim to a terminal and back again. 
As if the TMUX panes were integrated with Vim 'natively'. 
Sure NeoVim, 
the version of Vim that I currently rock, 
has a built in terminal. 
However, being a long time TMUX user, 
this always seemed like an odd addition. 
One that often was ashewed and never used due to the heavy adoption of TMUX.

All of this changed a few months ago when visiting [the current mothership][work]. 
We had just moved into a new and shiney floor that was dedicated to digital teams. 
This meant there were brand new monitors powered by a single USB C connection. 
However the moment NeoVim opened, 
the repaint on the terminal went from amazing to 20FPS immediatly. 
That's odd. 
This had never happened before on my home battlestation,
of which utilizes the same laptop but, powering three monitors (none running USB C). 

After some NeoVim finagling which led to absolutely no changes, 
I decided to close TMUX and fire NeoVim up without the terminal multiplexer. 
Low and behold NeoVim started without any rendering issue. 
This got me thinking once again. 
Moreover, it worried me that without TMUX, 
my NeoVim productivity would severely be hampered.

[Alacritty][term] is a pretty bare-bones terminal and 
without the power behind TMUX, 
it's a very bare experience. 
Giving up TMUX meant giving up a very quick terminal application. 
A speed boost that I wasn't willing to give up due to some sub par rendering... 
Until just a few days ago.

Having heard of the [Kitty terminal][kitty], 
I overlooked it due to my seemingly OK experience with Alacritty and TMUX. 
However, [this article][unicorns] caught my attention. 
In it the writers mention moving from Alacritty for the performance wins. 
After a quick brew cask install, 
[colorscheme switch][kittyNord], 
and [session to build a sensible starting point][sessions]
everything has been much quicker.

Without getting into a bunch of startup timing, 
everything has been much snappier running under Kitty. 
Excited to get back to NYC soon to see if this is true when plugged in. 
Look out for a tandem post here in a few weeks, 
detailing how the switch has gone. 

[tool]: https://code.visualstudio.com/Docs/languages/typescript
[vimVs]: https://github.com/VSCodeVim/Vim
[work]: https://www.glossier.com/
[term]: https://github.com/jwilm/alacritty
[kitty]: https://sw.kovidgoyal.net/kitty/
[unicorns]: https://shooting-unicorns.com/battlestation/from-mac-to-linux-the-setup-ive-grown-to-love
[kittyNord]: https://github.com/arcticicestudio/nord/issues/104
[sessions]: https://sw.kovidgoyal.net/kitty/#startup-sessions
