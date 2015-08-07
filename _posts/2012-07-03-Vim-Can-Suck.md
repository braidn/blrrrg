---
title: Vim Can Suck
layout: post
---

OS X is generally a wonderful operating system. Sure there are plenty of
[neckbeards][2] out there that would love to punch me in the balls for the
comment. On the opposite side of life, most designers would agree with
me down to the fact that they demand that all the fiddly buttons
are actually "[lickable][1]." Whatever that means. Several items both of
these camps should be able to agree on is:

1. Package management is hard on OS X
1. and lots of Apple's built in "stuff" (you might call them apps but,
   you would [be wrong in doing so][11]) kinda
   blow.

I happen to be a [very opinionated][3] Vim user and over the past month
have experienced...issues with the version of Vim compiled through the
nice folks at Apple. Before we continue, there are some clerifications
that are due. The Vim I am banging on about isn't [MacVim][4] or the Vim that
is bundled within the /Contents section of the MacVim install.

My biggest beef stems from the fact that the version bundled with Lion,
Snow Leopard, Leopard, Tiger, and probably all the way back to 10.1 are compiled without Ruby and Python support. This can cause
several issues with popular plugins like [Command-t][5] and
[Gundo][6] thereby rendering them useless when composing text. _READ_:
they don't fucking work. Being a short bus ride away from Canada day -
America, the [4th of July][7], I thought it appropriate to write a short
"how-to" in order to save potentially-awesome folk from this issue.

Ok, one more thing I am opinionated about is: [Homebrew][8].
Seriously, if you use MacPorts, Fink, or whatever other piece of
ancient package manager-shit, you have issues that will eventually equate to
your downfall. In addition, I am not much of a fan of Homebrew's stance
on not offering packages that "Duplicate functionality provided by OS X."
Enter: brew taps.

To get this started we are going to assume you have Homebrew installed
and every thing is up to date. Hop back into a terminal and type:

```
brew install mercurial
```

Yeah, I [didn't like it either][10] but so is life. Next:

```
brew tap homebrew/dupes
```

Agree to what it asks and make sure that your bashrc or zshrc file has
this path near the top

```
export PATH="/usr/local/bin:$PATH"
```

Now we have Homebrew set up to install system duplicate packages. Before
we set up Vim we need to switch back to the system compiled Ruby instead
of what we have set in Rbenv or RVM. Once that is done, life is a snap:

```
brew install homebrew/dupes/vim
```

Theoretically `brew install vim` will function nicely however, it is
always good to be explicit. If you would like to know some other
packages that fall into the realm of "dupes", check out this [Github
repo][9]. I have been using the Homebrew installed version all morning and by far it is faster and
more stable than what comes with Lion...DAMN you OS X for being so
brilliant and lacking at the same time!



[1]: http://youtu.be/-JFfN5pKzFU
[2]: http://img.gawkerassets.com/img/17phrnpizopotjpg/original.jpg
[3]: http://www.cloudbacon.com/posts/2011-12-20-Command-T-Sucks/
[4]: https://code.google.com/p/macvim/
[5]: https://wincent.com/products/command-://wincent.com/products/command-t
[6]: http://sjl.bitbucket.org/gundo.vim/
[7]: http://www.the-joke-box.com/pictures/tomahawk-utility-belt.jpg
[8]: http://mxcl.github.com/homebrew/
[9]: https://github.com/Homebrew/homebrew-dupes
[10]: http://www.cloudbacon.com/posts/2011-04-18-wordpress_to_ruby/
[11]: https://en.wikipedia.org/wiki/Package_management_system
