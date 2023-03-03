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
Something [Docker][dck] and friends hasn't quite cracked.

[nix]: https://nixos.org/
[bsd]: https://docs.freebsd.org/en/articles/explaining-bsd/
[rbd]: https://reproducible-builds.org/
[dck]: https://www.docker.com/
