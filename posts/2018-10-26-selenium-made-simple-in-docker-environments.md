---
published: true
title: Selenium Made Simple In Docker Environments
date: '2018-10-26'
---

It's been some time since there has been any technical sharing around here. 
Most of the time, Stack Overflow, although it's a bit of a troll fire these days, 
is a much better space to share technical bits and bobs. 
However, let's give it a whirl in this space for once.

[Selenium][sel] is a browser testing and automation library that's been around since 2004. 
Think of Selenium as a piece of software that sits between an application and a browser. 
It accepts commands and then executes those commands in the browser. 
Developers can write tests that assert on visible DOM nodes, 
browser interaction, etc. 
These tests cross cut the entire application layer and 
are good examples of how real users interact with the application. 

Getting these tests to work in a pure Docker enviroment can be a bit tricky. 
Yes, there are a few containers that you can pull and spin up but, 
how do we get everything wired together? 
Let's start off with the docker-compose.yml file. 
There may be more to this file, say redis, sidekiq, etc. 
However, this is just what's required to get Selenium talking to the test container.

<script src="https://gist.github.com/braidn/7cb4702d5508cdf7a0a6e9a92120fc6c.js"></script>

Let's break this down a bit to better understand what's going on.

There exists two separate containers that will run an instance of [Puma][puma]. 
One will run in development mode (under the web container), 
and the other will run a test environment (under the test container). 
Let's also make sure that there is no clashing here with ports. 
Both of the containers will run under a completely different port on the localhost (9292 and 3034). 
The port numbers here are not a hard requirement. 
They could be 9291 and 3035 
or whatever, they just can't clash.

There is one more file that is needed to tie this all together:

<script src="https://gist.github.com/braidn/531e064adcc13659c7ce40de11e93e98.js"></script>

Having a simple JSDriver that can be included into any class is perhaps the easiest way to setup JS testing. 
Plus, this should work with both RSpec (not worth the headache) or MiniTest. 

A couple things should stand out in this file. 
Namely the url for the driver, and the app_host url. 
The driver url is where the Selenium container is running. 
By default, programs running in Docker have access to other containers through their name. 
'Chromedriver' in this case will map to the url of the chromedriver container. 
With Capybara connected to a running Selenium instance, 
how does it know what URL to send requests to?

This is where the app_host comes in. 
Capybara will associate itself with the running test instance that's initiated with docker-compose up. 
With that, Selenium knows where and how to send browser commands. 
Since the Test environment is running under docker-compose up, 
logs of the Selenium interaction will stream into the terminal. 
This allows easier debugging 
as well as a way to know definitively if all of this has been setup properly.

If further debugging is required, 
the Selenium container runs a VNC server on port 5900. 
Since this is mapped to the host computer's port 5900, 
VNCing into the running Selenium test and watching the browser is possible. 
Be ready though, Selenium executes those commands quickly and it's easy to miss errors.

An that is that! 
Go forth and build awesome things that are well tested.
If for some reason some of this doesn't make sense or just doesn't work, 
feel free to [reach out on Twitter][twit] and interogate the author.

[sel]: https://docs.seleniumhq.org/
[puma]: http://puma.io/
[twit]: https://twitter.com/braidn
