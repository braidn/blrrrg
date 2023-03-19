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
However, [Home Manager][hmm] can be thought of as a dot files manager.
It has the ability to install packages that you may need for development,
like [Homebrew][hmb] but, it will ALSO generate all of your dot files.

This was a speed bump that was somewhat hard for me to get over.
I was too used to [Homebrew][hmb] and a dot files manager like [Homesick][hsc].
[Home Manager][hmm] removes the need for two different tools and makes everything configurable in one file.
Sure, there are ways to break up a single long file however,
having all configuration in one space makes it very simple to slice and dice configuration.
No need to hop between a bunch of files.

#### Kinda Like Homebrew

After setting up or changing your configuration,
simply run: `home-manager switch` and [Home Manager][hmm] makes sure all packages
and dependencies are properly installed.
Let's change the default `home.nix` file to add a few common developer dependencies.
This file can be found at: ` ~/.config/nixpkgs/home.nix`

```nix
	home.packages = [
		pkgs.awscli
		pkgs.git
		pkgs.fd
		pkgs.openssl
	];
```

After saving this file, re-running `home-manager switch`,
and waiting on a good amount of terminal output,
these executables will be available.

This workflow is very reminiscent of `Brewfiles` and [Homebrew][hmb].
You build a file with some dependencies, and [Homebrew][hmb] takes care of installing them.


#### Kinda like Dotfiles

Since [Home Manager][hmm] will also manage dotfiles,
there is a need to transition all of those config files into `home.nix`.
This is a bit of a worry because it's often times easier to write out a `zshr.rc`,
over figuring out the nix version of it. Example:

```nix
  programs.zsh = {
		enable = true;
		autocd = true;
		enableAutosuggestions = true;
		enableCompletion = true;
		enableSyntaxHighlighting = true;
		shellAliases = {
		  g = "git";
			f = "fish";
			be = "bundle exec";
	};
};
```

The above will auto generate a `zsh.rc` and
correctly set the above shell shell aliases.

While this seems somewhat burdensome,
once mastered, the amount of text required
to create most config files is much shorter.
The hardest part of these config blocks is knowing what you can actually config and how.
The easiest way to cut through this fog is to use the examples from the [Nix wiki][nwi].

One small caveat though is if configuring packages through `programs.x`,
it's best to omit adding those packages in `home.packages = [];`


[nix]: https://nixos.org/
[bsd]: https://docs.freebsd.org/en/articles/explaining-bsd/
[rbd]: https://reproducible-builds.org/
[dck]: https://www.docker.com/
[hmm]: https://nixos.wiki/wiki/Home_Manager
[hmb]: https://brew.sh/
[hsc]: https://github.com/technicalpickles/homesick
[nwi]: https://nixos.wiki/wiki
