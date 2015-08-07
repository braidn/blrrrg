---
title: Goodbye Bloated Fellow
layout: post
---

[Monkey patching][1] has been a common thing in all Ruby libraries over the years. One of the largest of them being Rspec. We all know, and love Rspec, unless of course you are a member of the Rails Core Team. Yet, with the recent release of Rspec and its’ 17 gems Rspec has given me a bad funk, that I just can’t seem to dispel. Recently, I had the chance to create a quick [SPA][3] and decided to throw Rspec out in favor of Minitest. Especially the following gem:

[minitest-rails][2] from [Mike Moore][4]

Due to the diminutive, and quick nature of the “application”, my current usage of Minitest has been slim. However, it was just installed in a new side project and hopefully I will be able to integrate it with any new or upcoming projects. It’s small, fun, and fast. Sure I introduce several other gems that add an element of monkey patching to the equation. Although, over-all I don’t miss anything about Rspec's seeming bloat.

So with a whiff of arrogance, and smattering of bias go forth and give it a whirl. Oh! And here are some sensible defaults that I feel make the transition process a little more upbeat. Also you can find the [public gist of this jazz here][5]

<script src="https://gist.github.com/braidn/b713c87758b3d62c4002.js"></script>


[1]: https://www.everlane.com/
[2]: http://rubygems.org/gems/minitest-rails
[3]: http://en.wikipedia.org/wiki/Single-page_application
[4]: https://twitter.com/blowmage
[5]: https://gist.github.com/braidn/b713c87758b3d62c4002
