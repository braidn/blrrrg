---
title: Nix Intros
date: '2023-03-02'
---

When most folks here the term '[Nix][nix]',
their minds likely lean towards anything 'Unix'.
This could mean any flavor of Linux.
For instance Ubuntu or Fedora.
Others, if they have quite a bit of grey in their beards,
might correlate Nix with [BSD][bsd].
However, the [Nix][nix] that this post tackles isn't any of these.

No, the [Nix][nix] that we are going to tackle here is the
tool that aims to solve the building of software tools.
Namely, it attempts to solve reproducible builds for development environments.
What does that mean in the most simple of terms:

> Any package that works on one computer, will work on another.

[Reproducible builds][rbd] are a bit of a holy grail in software development.
Having the ability to always compile the same source into the same result,
without error, will always lead to more robust software.
[Docker][dck] and other software has attempted to the very same.
However, these tools have been notoriously 'not great' at the development side of life.
When it comes to running code in production?
Sure! A containerized, static 'image' is great.
But, developing software locally requires hot reloading of code,
debugging, and being able to pivot quickly.
Something [Docker][dck] and friends have yet to crack.

Although [Nix][nix] might be a powerful tool,
the documentation makes the user experience somewhat tough to stomach.
The remainder of the post will be about getting a normal developer
through the second hurdles of [Nix][nix].
Specifically, how to set up the basics of [Home Manager][hmm] and perhaps
drop any need of [Homebrew][hmb].

#### What Is Home Manager Anyway?

Before diving into any code,
there is a missing (to this writer) writeup that showcases the differences
between [Home Manager][hmm] and [Nix][nix],
especially [Nix][nix] shell.

[nix]: https://nixos.org/
[bsd]: https://docs.freebsd.org/en/articles/explaining-bsd/
[rbd]: https://reproducible-builds.org/
[dck]: https://www.docker.com/
[hmm]: https://nixos.wiki/wiki/Home_Manager
[hmb]: https://brew.sh/
