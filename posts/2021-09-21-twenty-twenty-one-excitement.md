---
title: Things To Tickle My Fancy in 2021
date: '2021-09-21'
---

2021 has been a notable year on many fronts but,
it's also been a stellar one particularly for technology.
There have benn all kinds of bright and shiney toys from SSG to i ...SSG,
GitHub's Copilot has taken over our day-to-day,
and there's even heresay of the [real-real death of Webpack][ror7].

The following is a list of things that has personally captured my attention throughout the year.
Since it's only September, there is a high likelyhood that this will change as the year wanes to a close.
However, if anything does pop up, I'll be sure to share it here in some kind of 'addendum'.

Oh!
The below is also in no particular order.
Let's refrain from thinking that one of these items 'outweights' another.
They are all relatively exciting,
somewhat boring,
and mostly just a little better than the relevant competion.
Each one of them gathered on this list at precisely the same time.

1. [Astro.build][astro]:
  There has been only a shallow amount of exploration around the Astro community.
  Throughout that short time of playing with this 'toolchain', I have been blown away.
  The mere fact that Bob from accounting can write [VueJS][vue],
  Tom from marketing can write [Svelte][svelte],
  and it all compiles to a usable website is bonkers.
  Especially for anyone who lived through the frontend framework wars of 2010 through 2016.
  As 2021 comes to an end,
  I will continue to play and explore this toolchain when building [toy applications][pragprog].

1. [AWS CDK][cdk]:
  AWS's Cloud Development Kit has been around for some time.
  It's even likely to hit 2.0 in 2021 which is a huge feat for a large JavaScript project.
  Pulumi has also recently introduced '[native AWS][paws]' support using AWS's recently released '[Cloud Control API][capi]' tool.
  All of these tools aim at making Cloudformation much more maintainable and the resulting infrastructure easier to reason about.
  Overall I am psyched to see where 'DevOps as code' tooling evolves in 2022.

1. [Cloudflare's][cloud]
  service offering is exploding throughout 2021.
  It's almost weekly that they are building something new that's in beta.
  However when you check back the next week,
  that thing that was new last week is out of beta and something new is taking its' place.
  Cloudflare is aiming to push all compute closer and closer to users ('The Edge').
  This coupled with streaming data (also served from the edge) will be where we see larger performance gains in the future.
  This blog is even taking advantage of recently released features: moving from Netlify to Cloudflare's Pages offering.

1. Digital Gardening
  or perhaps 'knowledge recording' is top of mind for many folks in a knowledge heavy field.
  There has been a lot of new products budding out of this interest for the better part of the last 2 years.
  Many folks may know about [Roam][roam] but, there is also [Obsidian][obs] and [LogSeq][lgsc] that have a good slice of the market share.
  All of these tools are helping us recall pertinent information when we needed it the most.
  When one works in a field that is awash with information that's not always easily searchable,
  having a tool to expedite recall is invaluable.

1. Many 'things' are being standardized behind an HTTP interface.
  Shared connection pools between databases and applications have always been spaces frought with disaster.
  Now though, there's no longer _any_ need.
  There's a reliable HTTP API where those pools used to be.
  We can cache these calls, horizontally scale to any number of connections, and even stream data if we choose.
  [FaunaDB][fauna] is a great example of a tool that's doing this well.
  They are driving data into an API layer that people understand and distributing the data behind it.
  This space in 'infrastructure' is only going to grow as we move forward with business logic residing at 'the edge'.
  Waiting on centralized data is going to seem completely foreign in two years time.

What are other folks really interested at the moment?
Specifically what's not only blown your mind in 2021 but,
has you wishing you could use it at your day job?

My direct messages are always open on [Twitter][twit]!
Feel free to drop a response there and let's start a conversation.

[ror7]: https://weblog.rubyonrails.org/2021/9/15/Rails-7-0-alpha-1-released/
[astro]: https://astro.build/
[vue]: https://vuejs.org/
[svelte]: https://svelte.dev/
[pragprog]: https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/
[cdk]: https://aws.amazon.com/cdk/
[paws]: https://www.pulumi.com/blog/announcing-aws-native/
[capi]: https://aws.amazon.com/blogs/aws/announcing-aws-cloud-control-api/
[cloud]: https://www.cloudflare.com/
[roam]: https://roam.com/
[obs]: https://obsidian.io/
[lgsc]: https://logseq.com/
[fauna]: https://fauna.com/
[twit]: https://twitter.com/braidn
