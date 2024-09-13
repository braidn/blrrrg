---
title: Anti Innovation Tokens
date: '2024-09-12'
---

Recently an ex-team member of mine received negative feedback on an approach to consolidate on a single datastore.
The intent was to focus all of their infrastructure knowledge on ONLY [Postgres][pg].
This was for a fairly normal [Ruby on Rails][ror] application that already liberally utilized a handful of innovation tokens.

The concept of these is actually quite old in 2024, so this post should help: [Choose Boring Technology][cbt]

This individual's idea would be to utilize Postgres for queuing,
database interactions,
and with [Solid Cache][scache];
caching both [GraphQL Response Fragments][gfrag] and [Rails][ror] cache needs.
The heresy though of removing complexity, especially at the infrastructure level.
Becoming focused on a single piece of technology is still considered a step backwards or 'pedestrian'.
Doubly so, when teams take such a libaral use of innovation tokens at the beginning of an application.

Relentless simplicity is a great marker of senior (even staff) engineers.
Rich Hickey has a good amount of thought on this as well:

https://www.youtube.com/watch?v=SxdOUGdseq4

[ror]: https://rubyonrails.org
[cbt]: https://mcfunley.com/choose-boring-technology
[scache]: https://github.com/rails/solid_cache
[gfrag]: https://github.com/DmitryTsepelev/graphql-ruby-fragment_cache
[pg]: https://www.postgresql.org
