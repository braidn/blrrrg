---
title: Tmux Powerline Pimping
layout: post
---

Alright folks if you don't use [Tmux][1] you are pretty much doing it 100% wrong
and you won't get much out of this post. Also, I understand... or "[hear][2]" that
Screen is [wicked awesome-tastic][3]; however, [I couldn't][4] care less.

If for by some miracle, you do use Tmux, why aren't you using [this][5]? Sure,
it is a little colorful, and a bit noisy... but, yeah feel free to tell your
friends you found it, and you didn't hear it from me. Right, since most of the
segments are just bash scripts I have been searching for one that will show off
the current temp of the machine. What joy I must have been in when I found [this
snippet from Coderwall][6]. Although, it is wrong.

Yeah, I was [wicked surprised][7] as well. Besides, does "Coderwall"
sound like a place where people go to circlejerk to anyone else... wait, is it?

It appears that between that..."Coderwall" and now, Tmux-powerline has gone
through a rewrite and yielded the snippet useless. Since there is a [real place
for these kinds of things][8], here is the [correct code in the form of a gist][9].
Place the code into a newly written file in the segments directory and name it
something smart(with a `.sh` file extension). Then, run `chmod a+x filename` to
make the script [super executable][10]. Finally, add it into your theme and

BOOM!

The only problem is smcFanControl in the menu bar and in Tmux both use the same
binary to read the temp. However, on my Macbook Air there is a 5-10 degree
differance between the two. Must be due to the fact that the temp is in [Celcius][11].


[1]: http://pragprog.com/book/bhtmux/tmux
[2]: https://gimmebar.com/view/50340ae129ca15593d000005/big
[3]: https://gimmebar.com/view/50305c7729ca153546000001/big
[4]: http://www.urbandictionary.com/define.php?term=I+could+give+two+shits
[5]: https://github.com/erikw/tmux-powerline
[6]: https://coderwall.com/p/cmw1mq
[7]: https://gimmebar.com/view/504f465629ca15bb4b000000/big
[8]: http://jsfiddle.net/
[9]: https://gist.github.com/4404483
[10]: https://gimmebar.com/view/50b6270eaac4228f36000009/big
[11]: https://gimmebar.com/view/502ea8eaaac4223116000014/big
