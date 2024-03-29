---
title: 2022 In The Bag
date: '2023-01-02'
---

To say: 'it's been a bit of year',
would be more than an understatement.
However...

> It's been a bit of a year

### A Year of Rails

For all the folks who don't know,
I spent the year transitioning from [Glossier][glo] to [Orbit][orb],
having [Orbit][orb] implode financially,
racing to find and land a gig before the end of 2022,
and finally finding a space at [PayNearMe][pnm] right before 2022 slammed shut.
With [Orbit][orb] and [PayNearMe][pnm] both being large [Rails][ror] apps.
Honestly, if in 2021 I was asked what technology I would be using in 2023,
[Rails][ror] would not have been my answer.
Not even in the top 5...

Throughout most of 2020 and 2021 [Glossier][glo] aimed to transition their own monolith to microservices.
This work was done by opting into the growing serverless world offered by [AWS][aws].
Ultimately, many of those products never saw the light of day.
And eventually the organization opted to replatform to [Shopify][shp] instead.
Having worked on and even lead some of those initatives,
the world of serverless was top of mind.

The [Rails][ror] market though has exploded in the last couple of years.
Making a comeback that reminds me of the late 2012's throughout 2015.
Most of what a successful job search looks like (more on this soon)
is managing relationships with recruiters.
Those recruiters right now have large holes in their [Ruby][rb] or [Rails][ror] pipelines.
The flip side of this is the dearth of [Serverless][srv] roles at the moment.

[Serverless][srv] maybe something that's talked about widely by internal team members but,
there's little of it talked about (openly) outside oranizations.
Or rather, outside the echo chambers that are [HackerNews][hn] and [IndieHackers][ihc].
Doubly so when chatting about specific roles with hiring managers or internal recruiters.
Even bringing up concepts that apply to well architected applications lands flat with all but,
the most advanced engineers in interview loops.

Walking into a new [Rails][ror] gig isn't as easy as it was even 5 years ago.
Although most folks think [Rails][ror] applications follow some kind of standard template,
many are their own little unique snowflake.
Sometimes with sharp edges all over the place.
After working on three different and 'hefty' [Rails][ror] apps in 2022,
the following are 'a few tidbits' of what others can expect if they find themselves working on [Rails][ror] in the future...
Or today.

### Seriously Barry, how much is a liter?

[APM Metrics][apm] (logs don't count) are hit or miss when it comes to most apps.
Some may have pooly implemented systems,
others have several systems that compete with one another,
and others may have no way at all of collecting [runtime metrics][met].
None of this depends on the age of the application,
the age of the engineers,
or even the number of senior engineers on the team.

No, sadly metrics as well as corresponding alarms and alerting,
are indeed: a crap-shoot.
If, for some reason the application is generating relevant metrics,
the resulting charts and graphs around these metrics will be largly
made up of whatever defaults the [APM][apm] tool of choice selected.
Because this work tends to be fairly time consuming,
any proposed changes to a 'working' implementation comes across as impossible to sell.
All of it leaves on call members fighting to figure out what alarms are relevant,
or simply snoozing them until thresholds fall back to normallity.

The scarriest scenario of all is you find yourself at a company that has no tooling on this front.
None. Zilch, Nada.
It can only get moderatly worse if the company makes money.
A rather odd man named: "Jeremy Clarkson" put it best when he was meandering about French and Italian cars (1:19 through 1:34)

https://www.youtube.com/watch?v=KmAY4FQ5L4E&t=79s

It's honestly surprising how bad I have seen it in this domain with [Rails][ror] over the past 4 to 5 years.
The reason behind this is likely due to the complexity driven by competing cloud services.
This space though is inherently hard and SRE's,
good ones,
are hard to come by.
Not to mention hard to hire full time for most startups.
Coupling this with a space that most developers actively avoid,
leads to a recipie for oncall disasters.

### Power Blackout!

Documentation in any project takes a thoughtful amount of time.
Not just today but,
tomorrow, the next day, and certainly every day afterward.
This type of documentation could be in a [Wiki][wik],
a [Readme][rdm],
inline with code,
or an [external tool][not].
However, guarenteed, if you sit down at most [Rails][ror] jobs today,
that documentation will be spectacularly out of date.
If you are lucky it refrerences the [correct database][dyn] version.
What's much more likely though is a host of missing [infrastructure requirements][drz],
out of date setup 'best practices',
and a [Readme][rdm] that's a jumbled mess of 18 sections of which no developer has read in its' entirety in the past 6 months.

I am not entirely sure if it's the productivity that [Ruby][rb] affords or 
if many Rubyists still think that _all_ of their code is self documenting.
However, the appauling state of most [Ruby][rb] and [Rails][ror]
project's documentation would shock and awe almost all developers.
Perhaps all of this stems from the whole [Yard Vs Rdoc][doc] debacle but,
it's highly unlikely.
A much more likely scenario is:
[Ruby][rb] and likely more [Rails][ror] developers haven't yet comprehended that documentation is a [force lever][lvr].

It's been interesting being around > 3 larger [Rails][ror] apps in 2022
as well as quit a few smaller [Ruby][rb] apps.
Documentation in this realm sits at two dipolar ends of the spectrum.
It's either the most well thought out and hierarchal brilliant piece of prose ever...
Or the documentation is so borderline useless, it's better off deleted.
Sadly I have never seen an 'in-between' or grey area.
Due to this,
thoughtful approaches to this problem should be top of mind for
all [Ruby][rb]ists entering a new role or kickstarting a new startup.

### Maybe A Mutiny Of Clowns

Most... Perhaps even _all_ [Rails][ror] apps are shaped different than what most toy [Rails][ror] apps look like.
This is always a bit of a surprise since one of the core concepts of [Rails][ror] is to keep to a 'strict' set of conventions.
However, engineers will be engineers and customizations will creep in.
The three forms of intense customizations that have been most prevalant are:

1. The Hidden Gem
2. The Layered Onion
3. The Method Missing Addict

#### The Hidden Gem

Everything, and I do mean EVERYTHING is a gem.
Perhaps there's a need to sell goods,
pull in [Solidus][sol].
Need a CMS?
There's a gem for that!
Building a feature to take on the complexity of another gem?
MAKE it a Gem!

It's almost as if the whole NPM debacle never permeated back to the Ruby community.
That or (and this is highly likely) this is some form of modularization or 'services' to some Rubyists.
Whatever it is,
it almost never is created due to a concrete boundary in the code.
In addition, the idea is usually created by some newer engineer who's impetus is to avoid learning the existing system.

Regardless of the intent,
the result is a system that has a blurry set of business rules locked behind doors
that no one has figured out how to open.
Yes, [Solargraph][slr] isn't bad,
nor is [Syntax Suggest][ss] or [Syntax Tree][syt].
The amount of developers though who know how to wrangle these powertools,
is far and fleeting.

#### The Glass Onion

[Rack][rck] middleware is at the heart of the [Rails][ror] framework.
Due to this, developers are free to build and add in their own middleware layers.
However,
like most things that come with 'great power',
many apps fall prey to embaracing an overload of middleware layers.
Many of these layers reach into data stores,
either locally or in the 'cloud'.

This is where these approaches begin to break down.
If (for some reason) some value can't yet write to S3,
why should your entire application fail to render?
Sure, there are error handling techniques to mitigate this but,
if a team is moving fast, they are unlikely to build them in.


#### The Method Missing Addict

Lastly, the most common type of [Rails][ror] application that one may run into,
is the one where no one heeded the warning about metaprogramming.

Every class and concern is peppered with `method_missing` definitions.
Leading to an impossibly-large and
blurry boundary between objects that represent the system.
On top of classes that respond to almost any message,
the objects themselves are so [God like][god] that
it's impossible to discern their actual shape.

[Domain modeling and design][ddd] maybe a core part of [Object Oriented Programming][oop]
but, it's fallen out fashion as of late.
Doubly so in the [Rails][ror] community.
Without this,
many larger apps tend to fall down with the weight of a few bloated classes.
The anthesis of this would be a constellation of well defined classes that are small and focused.

Well designed (and documented) systems lead to productive engineers that push features successfully.
Systems that are hard to understand not only jeapordize engineer's productivity,
it compounds within the organization with each new hire.


### Grover Cleveland called, He Wants His Watch Back

Every organization that has a rather large [Rails][ror] app or perhaps multiple 'mini-monoliths',
has a wizard on payroll.
This human has likely been around the organization for awhile but,
they definitely have the power to wield any and all of [Ruby][rb]'s [DSL][dsl]s.
If [RSpec][rsc] is in play,
it's almost guarentted the human is a wizard at that.

The preverbial [RSpec][rsc] wizard is as common as the household fly.
They know every esoteric edge case when it comes to the absolute shit show that is alternative spec frameworks.
Confused and need to know how to deeply test a complext JSON object with compound matchers?
Grab some time to pair with your local wizard because,
everyone claims that they (and only they) have an answer.

These folks are great at generating green dots but,
pin them down to speed up a test suite,
run one effectively on CI,
or even kickstart one for a new application
and they usually come up exceptionally short.

If your organization has one of these individuals,
take the time to learn what their kryptonite is.
Often times they have an alergic reaction to more normal items in the development workflow.
Either parts of [Git][git],
newer norms in development like 'UUIDs',
or even simple ideas like decoupling complexity using [PORO][pro]s
and [small classes][sml].
Just like with metrics and performance sampling,
if an organization that you work at employs and upholds the nonsense of said wizard...

https://www.youtube.com/watch?v=KmAY4FQ5L4E&t=79s

### Danger Zone!

2023 is going to be huge...

https://www.youtube.com/watch?v=U3D82Km1LEU&t=12s

For [Rails][ror].
Beyond the aforementioned insanity,
the [Rails][ror] framework still is a great way to kickstart almost anything.
Sure,
apart from deployments (it's still a monster),
getting literally anything to an [MVP][mvp] and
to any type of investment,
is still easier than figuring out what a [Dockerfile][dck] is for.

With that,
here's to another spectacular year zooming by wearing [Ruby][rb] tinted glasses

[pnm]: https://home.paynearme.com
[ror]: https://rubyonrails.org
[aws]: https://aws.amazon.com
[shp]: https://www.shopify.com
[rb]: https://www.ruby-lang.org/en/
[met]: https://docs.datadoghq.com/tracing/metrics/runtime_metrics/
[apm]: https://en.wikipedia.org/wiki/Application_performance_management
[wik]: https://en.wikipedia.org/wiki/Gollum_(software)
[rdm]: https://tom.preston-werner.com/2010/08/23/readme-driven-development.html
[not]: https://www.notion.so
[dyn]: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html
[drz]: https://en.wikipedia.org/wiki/Drizzle_%28database_server%29
[doc]: https://stackoverflow.com/questions/3699706/yard-is-not-the-same-as-rdoc
[sol]: https://solidus.io
[slr]: https://solargraph.org
[ss]: https://github.com/ruby/syntax_suggest
[syt]: https://github.com/ruby-syntax-tree/syntax_tree
[rck]: https://github.com/rack/rack
[god]: https://en.wikipedia.org/wiki/God_object
[ddd]: https://en.wikipedia.org/wiki/Object-oriented_analysis_and_design
[oop]: https://en.wikipedia.org/wiki/Object-oriented_programming
[dsl]: https://en.wikipedia.org/wiki/Domain-specific_language
[rsc]: https://rspec.info
[git]: https://git-scm.com
[pro]: https://stackoverflow.com/questions/2252075/plain-old-objects-in-ruby#2252173
[sml]: https://www.youtube.com/watch?v=8bZh5LMaSmE
[mvp]: https://en.wikipedia.org/wiki/Minimum_viable_product
[dck]: https://docs.docker.com/engine/reference/builder/
[srv]: https://www.redhat.com/en/topics/cloud-native-apps/what-is-serverless
[ihc]: https://www.indiehackers.com
[hn]: https://news.ycombinator.com/news
[lvr]: https://letstalkscience.ca/educational-resources/backgrounders/simple-machines-levers
[orb]: https://orbit.love
[glo]: https://www.glossier.com
