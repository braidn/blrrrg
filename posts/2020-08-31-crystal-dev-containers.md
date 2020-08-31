---
title: Crystal Dev Containers
date: '2020-08-31'
---

About a year ago,
Microsoft released a way to [develop inside a container][vcontain] using VSCode.
The idea is so wildly clever and simple,
it to this day continues to blow my mind:

Build an environment for your code to run in, utilizing Docker images.
Then inject a server like version of VSCode into the running container with a specified list of extensions.
And finally have an exterior client version of VSCode connect to the running server.

The result is like working locally on a piece of code/project but,
requiring the programmer to install zero dependencies (beyond Docker).
No Node modules, Ruby gems, Go packages, etc.
This also means that there's no need to weigh down a VSCode install with a bunch of language specific plugins.

With [Crystal][crst] reaching a 1.0 state soon,
I decided to hop in and create a Crystal specific dev container:

```dockerfile
ARG VARIANT="20.04"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-ubuntu${VARIANT}

RUN apt-get update && \
    apt-get install -y build-essential curl libevent-dev libssl-dev libxml2-dev libyaml-dev libgmp-dev git && \
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN curl -sL "https://keybase.io/crystal/pgp_keys.asc" | apt-key add - && \
echo "deb https://dist.crystal-lang.org/apt crystal main" | tee /etc/apt/sources.list.d/crystal.list && \
apt-get update

RUN apt install -y crystal
```

Once VSCode starts up using the above Dockerfile,
the entire Crystal development chain will be available through VSCode's terminal

As an added bonus,
When initializing a devcontainer in a repository,
the user is given a `devcontainer.json` file that allows for some container specific overides.
If you also add the following extension (to the devcontainer.json extension collection),
VSCode will be able to provide Language Server Support to any `.cr` file.

-   faustinoaq.crystal-lang

[vcontain]: https://code.visualstudio.com/docs/remote/containers

[crst]: https://crystal-lang.org/
