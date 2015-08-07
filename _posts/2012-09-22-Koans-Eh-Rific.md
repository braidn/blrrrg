---
title: Smaht Koaning
layout: post
---

To think that this blog went through a steep declined after August is a
damn crying shame. Also, I could have been [lost][1] but, that is
neither [here][2] nor there. Also, and perhaps a complete surprise is a
post about shit I actually do...like for a living. Without further ado:

It should come to no surprise to the [readers of this blog][3] (that
poster is sandbagging) that I love [Ruby koans][4]. Specifically the
ones maintained by the wonderful people at Edgecase. [Koans][6], for the
peeps who have no clue are a staple in the [apprenticeship movement][5]
and are an easy and repeatable way to hone your skills.

Ok so practicing is a good thing, but how do we make said practice more
fluid? To accomplish fluid...ness, is that right? We are going to need
some tools, of which might be a little frightening to the new sotware
developer. Don't fret:

1. Vim
1. [Vimux][7]
1. [Tmux][8]
1. Some [bud][9]

One of the biggest problems people have with koans is the tedium of
jumping back and forth between your editor and terminal to run the `rake`
command. Problem solved. Open your current koan with Vim in the terminal.
You can throw MacVim [out the window][10] (the fact that we can fly still amazes that guy). Create a split(vertical) window with
Tmux and navigate up a directory to where the rakefile is located. Hop
back over to your Vim instance and initiate: Vimux-RunVimTmuxCommand.
For me this is bound to `leader rp`, type "rake" and BOOM. Your koan
information should be stdout...ing.

No need to actually jump to the adjacent tmux window, no need to jump
out of your typing environment, and no need to break your awesome koan-like
focus. Another hat tip would be to use the RunVimTmuxLastCommand instead
of having to continually type rake in the the Vimux window. BOOM! Fluidity
leveled up.

[1]: https://gimmebar.com/view/5045518529ca15f836000020/big
[2]: https://gimmebar.com/view/5032f67e29ca154572000000/big
[3]: http://www.ardmorelibrary.org/literacy/images/oneoutoffive.jpg
[4]: https://github.com/edgecase/ruby_koans
[5]: http://www.amazon.com/Apprenticeship-Patterns-Guidance-Aspiring-Craftsman/dp/0596518382?tag=duckduckgo-d-20
[6]: https://en.wikipedia.org/wiki/K%C5%8Dan#Varieties_in_koan-practice
[7]: https://github.com/benmills/vimux
[8]: http://tmux.sourceforge.net/
[9]: http://media.screened.com/uploads/0/5115/407558-airbud1_super.jpg
[10]: http://thegrio.files.wordpress.com/2012/05/romney-looking-out-the-window-16x9.jpg?w=650
