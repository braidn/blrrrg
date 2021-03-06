---
title: Fixing MYSQL in Homebrew
date: '2011-03-20'
---

*EDIT*: Sometimes this doesn't happen. It seems to be a random occurrence on a random smattering of systems.

If you are even thinking about a career or just having some fun with software development, I recommend a handy little company named Apple and a package manager called <a href="http://mxcl.github.com/homebrew/">Homebrew</a>. Mac OS X (pronounced O-S 10) is basically a prettier shell of <a href="http://en.wikipedia.org/wiki/Unix">Unix</a>, minus all the kick ass packet managers (APT, MiKTex, YUM, etc). These "package managers" allow the user to install and uninstall applications via the terminal without having to do all that <a href="http://www.codecoffee.com/tipsforlinux/articles/27.html">make, make install bullshit</a>. I have been using Homebrew without a problem up until yesterday when I attempted to install MySQL.

Most people don't need to worry about these things because there is an application called <a href="http://www.mamp.info/en/index.html">MAMP</a> that takes all the legwork out of dealing with Apache, MySQL, and PHP on your Mac. If you want something fairly robust and plan only on doing HTML, CSS, and PHP then this little application should be fine for your needs. If you decide you want to branch out into Ruby, Rails, Django, etc you might find the need to install these items via source. However, this brings me to another point. <a href="http://dev.mysql.com/">The MySQL dev page</a> has a simple .dmg that you can use to download and install MySQL on your Mac.  So wait...why on earth would I pull my hair out for six plus hours trying to get MySQL to function properly with Homebrew?

Homebrew creates a simple repository for all your package needs and <a href="http://en.wikipedia.org/wiki/Symbolic_link">symlinks</a> the files into their required locations. This makes updating packages ridiculously easy as well as installing said packages. No needing to guess if you removed all those pesky files sitting around your system. Simply type:

<script src="https://gist.github.com/2711119.js?file=brew install"></script>

and you are golden. Golden until you try to grab the MySQL formula. Without further ado, let's fire up <a href="http://code.google.com/p/iterm2/">ITerm2</a> or Terminal and get this functioning:

First make damn sure that /usr/local is rocking the correct permissions required by Homebrew. After a major OS X upgrade (from 10.6.5 to 10.6.6) this folder can revert back to its' default permissions. To solve this we:

<script src="https://gist.github.com/2711119.js?file=chown"></script>

NOTE: The correct snippet uses primes (`) (the mark beside the number one on a US Keyboard), not single quotes. For some reason these don't parse well with Wordpress. This just gives you ownership under /usr/local so you don't have to install every formula with the sudo command. Some people have "security" issues with doing this but, they are just really just crybabies. Next tell Homebrew that you really want the MySQL formula:

<script src="https://gist.github.com/2711119.js?file=brew mysql"></script>

This should take some time, don't worry. When it finishes it will regurgitate some commands to finish the installation. Here is what we need to do:

<script src="https://gist.github.com/2711119.js?file=build mysql"></script>

Some people have issues with this without prepending "sudo." If the chown -R command worked successfully, it should build all the default tables and the root user. Normally the root user is created without a password but, through this installation, the MySQL instance is actually created without any dummy tables or users (even root!). Before we go any further let's make sure that the server is off:

<script src="https://gist.github.com/2711119.js?file=launch_ctl"></script>

Next, lets force the server (mysqld) to startup regardless of permissions:

<script src="https://gist.github.com/2711119.js?file=grant-tables"></script>

Now that the server is running open a separate window or tab (in Terminal/iTerm) and login to the server with:

<script src="https://gist.github.com/2711119.js?file=u root"></script>

If everything worked out, you should be presented with a mysql&gt; prompt and full access to the database. Next up on the chopping block, we need to create some users. When issuing the next couple of commands the server should tell you that 0 tables were changed. Don't fret, we aren't changing tables, just permissions; MySQL is obligated to tell you every little thing it does...it is boring like that. In addition, all of the below is case-sensitive (For peeps who don't work with strait MySQL queries)

<script src="https://gist.github.com/2711119.js?file=gistfile1.sql"></script>

Change the "YOUR_PASSWORD" field to whatever you like and DONE! Yep, that is it. Now you can start and stop the MySQL server at will with:

<script src="https://gist.github.com/2711119.js?file=server stop start"></script>

After figuring out all of this around 3am this Sunday morning, I realized that my life is nothing but a bag of awesome-problem solving door knobs. Go forth and install MySQL not through MAMP or the dev .dmg but, through a fully featured, and sometimes broken (there will always be trade offs) package manager.
