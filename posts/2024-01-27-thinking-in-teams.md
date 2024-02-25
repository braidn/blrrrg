---
title: Thinking In Teams
date: '2024-01-27'
---

GitOps or DevOps (whatever you are doing) can really be a tricky thing when at a mid stage startup.
Security often times won't allow everyone to have access to deploy items to Production.
Moreover, it's tough to expect individuals to be able to run and observe services that they build.
This doesn't mean that engineers at these young startups are unable to build infrastructure,
they simply might not had the experience or mentorship to do so.

What this all leads to are smaller departments where this style of workstreams fall onto.
Sometimes they are called 'Platform' or 'Infrastructure' teams.
However, at the end of the day they tend to be a collection of engineers who are tasked
with keeping infrastructure needs checked off for the organization,
and pushing betterment in the realm of observability and other '[SRE][sre]' initiatives.

As you may have guessed,
these teams often run light due to how they are viewed as [cost centers][ccent].
Due to this,
individuals on this team are often times overworked with
a chronic amount of split priorities.
All of this leads to snowflake like devops focused solutions that
need constant gardening from the same small team that's historically overworked.

As an organization grows and really,
as they exit the size of most Series A or B startups,
they end up outgrowing this reality.
However, how can newer orgs or even CEO's plan to avoid these organizational hurdles?
The following are a few tactical priorities that anyone,
from all levels of an engineering org,
can focus on when building something new.

### Everything In Production On Day One

There are engineers that aim to get their work into a 'Production Environment' on day one.
Not when the application is ready to be launched but,
the very moment that the first PR is merged.
Perhaps the automation to make this happen lags behind.
However, the ability to get code into a Production environment (even maybe all environments) is incredibly impactful.

### Nothing Runs Locally

Infrastructure is one of the trickiest parts of getting an application running.
Locking down what version of Postgres or Elasticsearch is tricky through applications like homebrew.
However, choosing to spin Postgres up through a Docker Compose file can impact everyone's productivity.

### Managed Complexity Like the Plague

It's fairly normal for Rails to co-op complexity that's condsidered 'normal'.
A good example of this is utilizing Redis/Sidekiq for background jobs. 
Sure, Redis is easy and quick to spin up but, eventually managing a cluster,
or even multiple clusters quickly becomes a headache.

Teams that can utilize Postgres for everything will undeniably move faster than those that chose complexity.
And when Postgres becomes an issue (Russin Doll or fragment caching),
move to something that minimizes infrastructure based complexity.


### It's Everyone's Job To 'Devops'

Or 'gitops' or whatever modality that the org subscribes to.

[sre]: https://www.ibm.com/topics/site-reliability-engineering
[ccent]: https://en.wikipedia.org/wiki/Cost_centre_(business)
