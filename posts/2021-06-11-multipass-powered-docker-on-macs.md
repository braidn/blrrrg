---
title: Multipass Powered Docker on the Mac
date: '2021-06-11'
---

Ever since [Docker for Mac][d4mac] began pushing their 'paid platform',
I have been looking for a sensible way of removing it from my daily development flow.
Plus, the whole filesystem access on Mac,
continues to be a bit of a pain and altogether horrifically slow.
If this isn't something that bugs you,
than likely this [small regression when using 'too many' ports][regres] will.

WSL2 seems to be a great option for the folks running Windows but,
what options is similar to this on the Mac?
Apparently Canonical (the folks behind Ubuntu) offer a similar solution titled: [Multipass][mpass].
The best part though?
Multipass utilizes OSX's native hypervisor support (hyperkit) for the most performant virtual resource mapping.

Sadly, Multipass is **only** a [virtual machine][vm] orchestrator versus a container orchestrator (Docker).
However, this ends up being a great happenstance because it means developers can have VM's that are for
Docker, Kubernetes, Faasd, the works!
With great potential comes a host of configuration.
Since these are 'bare virtual machines',
there needs to be a way to configure them during their initializations.

Canonical utilizes their tooling called [cloud-init][cinit] to parse metadata and build a repeatable 'image' across virtual machines.
Using this,
there is a real way to define a Docker specific virtual machine.
Afterwards,
one can [install the docker binary][dbin],
[docker-compose HomeBrew package][dcbrew] and
set a DOCKER_HOST env var that maps to the cloud-init'ified virtual machine's IP.

With this setup,
all containers utilize a 'native' file system access since Docker is running in a Linux environment (akin to the aforementioned: WSL2).
This also allows a developer to remove or 'rage delete' the ridiculous Docker Desktop for Mac product.
This means removing that horrendous UI,
relentless alerts for paid upgrades,
and most importantly:
the slow filesystem access.

Below is a 'simplified' [cloud-init .yaml file][gist] for bootstrapping Multipass VMs with Docker already installed.

```yaml
#cloud-config
groups:
  - docker

users:
  - default
  - name: dockeradm
    sudo:  ALL=(ALL) NOPASSWD:ALL
    groups: users, docker
    ssh_authorized_keys:
      - ssh-rsa yourPublicSSHKey

package_update: true

packages:
  - apt-transport-https
  - ca-certificates
  - curl
  - gnupg-agent
  - software-properties-common

runcmd:
  - curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
  - add-apt-repository "deb [arch=$(dpkg --print-architecture)] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
  - apt-get update -y
  - apt-get install -y docker-ce docker-ce-cli containerd.io
  - systemctl start docker
  - systemctl enable docker

final_message: "The system is finally up, after $UPTIME seconds"
```

After saving this as `docker.yaml`,
bootstrapping a new VM using Multipass is as easy as the following terminal command:

`multipass launch -n docker --cloud-init docker.yaml`

Happy VMing!

[d4mac]: https://docs.docker.com/docker-for-mac/install/

[mpass]: https://multipass.run/

[cinit]: https://github.com/canonical/cloud-init

[regres]: https://github.com/docker/for-mac/issues/5668

[vm]: https://en.wikipedia.org/wiki/Virtual_machine

[dbin]: https://docs.docker.com/engine/install/binaries/#install-client-binaries-on-macos

[dcbrew]: https://formulae.brew.sh/formula/docker-compose

[gist]: https://gist.github.com/braidn/c48bc0aaaa3c680bd0ec9eee25d39e44
