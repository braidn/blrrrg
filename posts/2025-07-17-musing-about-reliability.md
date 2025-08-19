---
title: Notes On Or About Reliability.
date: '2025-07-17'
---

Reliability of a system,
especially when working on customer facing problems
(doubly so when it comes to those people's money),
is a whole lot like flying a 747 5 inches above the ground -
Taking a photo every 3 seconds.

Putting it differently:
> "reliability happens to be silly hard."

### What People Often Miss

Tooling can be a great way to build in automated spaces to push reliability bounds.
Teams often times opt to move fast (especially in startups) but,
skimping on team velocity can quickly drain future reliability.
Taking your time to setup proper CI, linting, formatting, or code norms at the beginning of a project can pay dividends down the road.
In contrast,
there are a lot of wins to build out a robust CI system as a project progresses.

Tooling is a great way to catch potential issues before code escapes to production.
Making sure that everyone is shipping the same shape of code and abiding by the same quality practices.
Many Git based developer platforms (GitHub or GitLab) are going to make this whole CI process easier.
In addition, they're going to bake in many norms that make the release process smoother and quicker.
Large an small teams often underestimate how resilient deploying hundreds of times a day can make you.

Not only are rollbacks and forwards easy with a few code changes,
teams further adopt tools that aid in resiliency like feature toggles, ab testing,
and more.
