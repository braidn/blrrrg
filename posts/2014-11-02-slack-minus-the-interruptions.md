---
title: Slack ZNC and IRC Meet For A Shootoff
date: '2014-11-02'
---

Feel free to raise your hand every time you log into the web interface for Slack (you know, the messaging app [everyone is flinging money at][1], seriously does anyone remember [Glitch][2]?) and are automagically angered by the battering of annoyances that surround "Notifications." Yes, notifications, those pesky little fuckers that [kife][3] your time and feed that growing portion of lizard brain.

Slack is great for team communications however, can easily become a bear to manage, even through their plethora of keyboard shortcuts. If you, like myself love the team I work for but, don't want to just shut them out for a large amount of the day, what are the options? Glad you didn't ask.

For the last three weeks... or so. What day of June is it? I have been using, chatting, consuming Slack through its' IRC Gateway. As it happens, I mentioned the word IRC to a fellow developer yesterday and he was surprised it was still around. Yes, yes IRC is still around and for many of us in the programming community, it is the defacto way to communicate with our peers. However, there is one problem with IRC that has plagued it for quite some time. When you aren't logged in you miss all of the juicy cat gifs everyone is sharing.

A great solution for this came about several years ago (it's still 2005 right?) called [ZNC][4]. ZNC is a bouncer that sits around in all of your connected IRC rooms and servers (Slack included) and captures what everyone is saying. Once you connect back to ZNC with a client like the newly and brilliantly updated [Textual 5][5], ZNC will read back to you what you missed and when it was typed. Pretty fucking sweet! So how do we tie all of this together?

First thing is first we are assuming that ZNC is all set up and an Admin user is available. If this hasn't occurred yet, [this guide does a wonderful job][6]. I recommend creating a new user for each Slack gateway (an admin might have to activate this if you are just a mere peon). In addition, you will want to keep your nick as the user outlined in your Slack's gateway settings and your bind-host to: 0.0.0.0. The bind-host thing is odd, it's Slack being persnickety, just need to deal.

Now that we have a login for ZNC, we need to add a server to this user. The easiest way to do this is to add a server to Textual5, and login using the **ZNC** credentials for your Slack user. Once signed in, you won't be connected to Slack however, you should msg help to /*status for a list of commands. One of these commands will be for adding a server which takes 3 arguments:

1. The url of the Slack gateway. Again, this is found on the specific gateway settings page for each organization.
2. The port, which in this case is 6667
3. A password which is your specific Slack IRC password. This is different than the normal Slack password. Again, grab this from your gateway specific settings page on Slack.

All connections to Slack servers should be done so over a secure or SSL connection (why won't you think of the children). When adding the server, make certain to add a plus sign(`+`) immediately before the port (no spaces). Simply disconnect and reconnect to the ZNC server and BOOM! All of your rooms will show up as well as any private rooms that you are apart of.

If you have logged off for a while or over night, the moment you log back in, ZNC will read back what you missed. Success! Slack integrations also show up in rooms as well! This is is a double success if a team relies on GitHub commits or their CI status. Overall I like being able to choose my own consumption point for Slack. It frees me up to control the notifications in a way that works for me... without annoying me insensately. For the mobile experience, I recommend a combination of email alerts for missed mentions, ZNC and [Palaver][8](there may be some marvelous IRC app for Android out there... nah, I doubt it).

If one of these points doesn't seem to work for you or you get stuck feel free to reach out to [me on Twitter][7] and we can get it fixed ASAP.

[1]: http://www.businessinsider.com/slack-raises-120-million-2014-10
[2]: http://www.glitchthegame.com/
[3]: http://onlineslangdictionary.com/meaning-definition-of/kife
[4]: http://wiki.znc.in/ZNC
[5]: http://www.codeux.com/textual/
[6]: https://www.digitalocean.com/community/tutorials/how-to-install-znc-an-irc-bouncer-on-an-ubuntu-vps
[7]: http://www.twitter.com/braidn
[8]: http://palaverapp.com/
