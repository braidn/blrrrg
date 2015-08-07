---
title: SSH Like a Linux Pro You Dawg
layout: post
---

Neck beards rejoice! No longer must you feel trapped to use $cat commands to
awkwardly get your [SSH][1] key from
your Mac to your Linux server...with its' ridiculous up-time. Since this
network admin rarely believes in using Windohs in a server environment, the
below trick might not work for Windows knuckle draggers. For everyone else,
give it a whirl, fire up terminal and connect to your favorite server and copy
your SSH / rsa keys the old-fashioned way:

<script src="https://gist.github.com/2711060.js?file=ssh 1"></script>

<script src="https://gist.github.com/2711060.js?file=copy-id"></script>

You should get some crazy error explaining that your Unix powered Mac is
missing this command. Huh? Because most "normal people" (sadly Macs are getting
more and more simplified due to the influx of iOS people hopping on board)
refuse to try to understand what a server is, let a lone SSH, Apple doesn't
need this rather integral command? Everyone else, you are in luck. Fire up my
favorite Mac OS X packet manager: [Homebrew][2] and type the following command

<script src="https://gist.github.com/2711060.js?file=brew ssh"></script>

Give it a few minutes while the magic finishes, log back into your server
and give the command a whirl again. However, the above snippet only works if
SSH is listening on the default port (port 22). If you were smart and changed
the defaults, this command should throw less fail flags:

<script src="https://gist.github.com/2711060.js?file=ssh copy"></script>

[1]: http://en.wikipedia.org/wiki/Secure_Shell
[2]: http://mxcl.github.com/homebrew/
