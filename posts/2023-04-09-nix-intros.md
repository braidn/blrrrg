---
title: Nix Intros
date: '2023-04-09'
---

When most folks here the term '[Nix][nix]',
their minds likely lean towards anything 'Unix'.
This could mean any flavor of Linux.
For instance Ubuntu or Fedora.
Others, if they own a beard and its' grey,
might correlate Nix with [BSD][bsd].
However, the [Nix][nix] that this post tackles isn't any of these.

No, the [Nix][nix] that we have here is the
'glue' that aims to solve the building of software tools.
Namely, it attempts to solve reproducible builds for development environments.
What does that mean in the most simple of terms:

> Any package that works on one computer, will work on another.

[Reproducible builds][rbd] are a bit of a holy grail in software development.
Having the ability to always compile the same source into the same result,
without error, will always lead to more robust software.
This holy grail has been tackled in many forms before.
Most people know of or have heard of [Docker][dck] but,
there are so many more examples in the developer experience graveyard.
Most of these tools have been notoriously 'not great' when developing locally.

When it comes to running code in production?
Sure! A containerized, static 'image' is great.
But, developing software locally requires hot reloading of code,
debugging, and being able to pivot quickly.
Something [Docker][dck] and friends have yet to crack.

Although [Nix][nix] might be a powerful tool,
the documentation makes the user experience somewhat tough to stomach.
The remainder of the post will be about getting a normal developer
through the second hurdles of [Nix][nix].
Specifically, how to set up the basics of [Home Manager][hmm],
a drop-in replacement for [Homebrew][hmb].

#### What Is Home Manager Anyway?

Before diving into any code,
there is a missing (to this writer) writeup that showcases the differences
between [Home Manager][hmm] and [Nix][nix],
especially [Nix][nix] shell.
[Home Manager][hmm] has a dual use:

  1. It has the ability to install packages that you may need for development,
like [Homebrew][hmb].
  2. It will ALSO generate all of your dot files (think .zshrc, configs, bashrc, etc)

This was a speed bump that was somewhat hard for me to get over and as I am writing this, hard to express.
I was too used to [Homebrew][hmb] and a dot files manager like [Homesick][hsc].
[Home Manager][hmm] removes the need for two different tools and makes everything configurable in one file.
Sure, there are ways to break up a single long file however,
having all configuration in one space makes it simple to slice and dice configuration.
No need to hop between a bunch of files and become lost with what maybe the result of generating those dot files.

#### Kinda Like Homebrew

After setting up or changing your configuration,
simply run: `home-manager switch` and [Home Manager][hmm] makes sure all packages
and dependencies are properly installed.
Let's change the default `home.nix` file to add a few common developer dependencies.
The below belongs in this file: ` ~/.config/nixpkgs/home.nix`

```nix
	home.packages = [
		pkgs.awscli
		pkgs.git
		pkgs.fd
		pkgs.openssl
	];
```

After saving this file, re-run `home-manager switch`,
and in a good amount of terminal output and time,
the `awscli`, `git`, `fd`, and `openssl` executables will be available.

This workflow should be home to the developer who understands how `Brewfiles` and [Homebrew][hmb] work:
One builds a file with some dependencies, and [Homebrew][hmb] takes care of installing them.


#### Kinda like Dotfiles

Since [Home Manager][hmm] will also manage dotfiles,
there is a need to transition all of those config files into `home.nix` which could be a bit of a worry.
It's often times easier to write out a `zshr.rc`,
over figuring out the nix version of it.
However, keeping that `zshr.rc` up to date and clean is now up to [Nix][nix] and not on the developer.
An example `zsh.rc` block in your `home.nix` may look like:

```nix
  programs.zsh = {
		enable = true;
		autocd = true;
		enableAutosuggestions = true;
		enableCompletion = true;
		enableSyntaxHighlighting = true;
		shellAliases = {
		  g = "git";
	};
};
```

The above will auto generate a `zsh.rc` and
correctly set the shell aliases for easy access to Git.

While this seems somewhat burdensome,
once mastered, the amount of text required
to create most config files is much shorter.
The hardest part of writing these is knowing what to pass to these config blocks and how this will alter the generated dot file(s).
The easiest way to cut through this fog is to use the examples from the [Nix wiki][nwi].

One small caveat though is if configuring packages through `programs.x`,
it's best to omit adding those packages in `home.packages = [];`
Which means if we have a `programs.zsh` block (like above),
there's no need to add `zsh` to `home.packages`.
[Nix][nix] assumes that it should install the zsh package if you the developer are generating a dotfile.

#### Oh So Much More

This touches the absolute tip of the [Nix][nix] iceburg.
In the next post we will explore an example configuration
file that doesn't look too much unlike my own and break down
what's going on, how to adapt and add on to it,
as well as some helpful hints when it comes to living with Nix every day.

The final part of this trilogy will showcase how to pair [Home Manager][hmm]
with `nix.shell` files to build idempotent developer environments in any directory. 
This will allow developers to not only remove the need of [Homebrew][hmb] but,
also remove language version managers like [ASDF][alp].


[nix]: https://nixos.org/
[bsd]: https://docs.freebsd.org/en/articles/explaining-bsd/
[rbd]: https://reproducible-builds.org/
[dck]: https://www.docker.com/
[hmm]: https://nixos.wiki/wiki/Home_Manager
[hmb]: https://brew.sh/
[hsc]: https://github.com/technicalpickles/homesick
[nwi]: https://nixos.wiki/wiki
[alp]: https://asdf-vm.com/
