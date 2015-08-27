---
published: true
layout: post
title: Hubot Sightings With Monit
---

Slack and bots go together like peanut butter and chinese food.
They are quite, literally [over running the joint][1].
So with an already loud and notification filled app like Slack,
what's one more? [Hubot][2] is a somewhat older,
coffee script powered happiness engine from the folks at GitHub.
Getting one of these guys up and running isn't really the topic here but,
this [guide][3] is super easy to follow.

Now that there is a bot up and running,
we can't just check out of the server and have it continue to run.
That's where [Monit][4] comes in.
Monit is a dead-simple, text based uptime monitoring system.
It can search out, at an interval and
make sure a specific program is still running.
If the PID, or whatever is missing,
Monit will use the designated start process to start things back up.

Ok, so how can we stitch Monit and Hubot together?
[Matt Garrison][5], a couple years ago put together a [gist][6] for just this occasion.
A couple of things to make this thing work:

1. Make sure on the restart and start services to use a user and group that is available to your server.
1. Name the bot properly
1. Make sure to use the correct path to the bot
1. And finally/lastly, call the hubot bin from node_modules, it's cleaner.

Happy annoying your fellow Slack mates with kittens and Archer quotes. Also, if for some reason Matt removes the above link, [here is my forked gist][7]

[1]: http://www.wired.com/2015/08/slack-overrun-bots-friendly-wonderful-bots
[2]: https://hubot.github.com/
[3]: https://github.com/slackhq/hubot-slack
[4]: https://mmonit.com/monit/
[5]: https://github.com/mattsgarrison
[6]: https://gist.github.com/mattsgarrison/1571390
[7]: https://gist.github.com/braidn/082dd25e1d2de4a91a60
