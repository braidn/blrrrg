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

Teams that fail to start with production code will always be searching for the best way to deploy code.
Sometimes these insufficiecies will manifest themselves in code taking longer than expected to hit main.
Perhaps as long lived feature branches,
or lack of proper rollout/feature flags.
These slowdowns,
and long lived features seem inoculous at first but,
can cause a seemingly high productivity team to grind to a halt.

### Nothing Runs Locally

Infrastructure is one of the trickiest parts of getting an application running.
Locking down what version of Postgres or Elasticsearch is nearly impossible through applications like homebrew.
However, choosing to spin Postgres up through a Docker Compose file can impact everyone's productivity in positive ways.

Yes, syncing code between docker volumes and a host can be unbearably slow with a Mac still.
However, a way to abstract infrastructure into a Docker/Container file and have all of the code run locally,
is a very doable feat.

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
This is one of those things that so few teams get right.
The real impactful work here is less about whole teams owning
and running their own infrastructure,
but more about teams understanding how infraustructure
empowers and impacts their day to day.

Getting this right isn't a one-stop route to success.
Engineers also don't need to give a damn' here either.
It doesn't hamper their career but,
it does allow them to specialize in ways that may need a dedicated 'gitops' professional.
As managers or team leads,
it's up to you to find weakness on a team and hire or pull in individuals across the org,
who are aligned with this mission.

### Guilds Are A Necessity.

Team mates need to have a space to break free from their workstreams and have a space to learn.
Sometimes this is a one-on-one experience but,
in an org with a healthy culture,
there will always be spece for specialized or shared education.

If the company's product is a web app than 99% of the time,
these guilds start with a 'Backend' and 'Frontend' space.
Other guilds will form around 'Devops', 'Data', and others as the process spreads.
Ultimately, the entire process should be utilized to increase collaboration throughout the engineering teams.

Organizations (these days), almost always get Guilds correct.
However, they often times are seen as 'time wasters' by product and engineering management.
Guilds should maintain their own specific backlogs.
Sure they are unlikely to need sprints but,
a simple Kanban like process can showcase a Guilds' impact on the rest of the org.



[sre]: https://www.ibm.com/topics/site-reliability-engineering
[ccent]: https://en.wikipedia.org/wiki/Cost_centre_(business)
