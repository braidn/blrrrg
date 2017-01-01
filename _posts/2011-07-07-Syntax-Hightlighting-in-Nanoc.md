---
title: Syntax Highlighters in Nanoc
layout: post
---

Code highlighting with say, Wordpress is an absolute breeze. All that is
required is finding the [plugin][1] that suits your fancy. This isn't quite as
easy when using a solution like [nanoc][2] or any other Ruby based static site
generator. This is due to the fact that all of your files are compiled on the
fly into html, instead of being held in a database and being "served" every
time someone visits your site (ala Wordpress/Drupal). For the person who is
smart enough to run a static site, don't fret. You have several great options
that are dying for implementation.

The two that come to mind are [Pygments][3] and [CodeRay][4]. CodeRay is built
with Ruby so it is as easy as:

<script src="https://gist.github.com/2710950.js?file=gem install"></script>

However, since Pygments is Python specific, we need a little wrapper to make it
work in our Ruby environment. A quick search on [Github][5] leads us to
[Albino][6]...a wrapper for Pygments. Since it is a wrapper we need to nab
Pygments by invoking:

<script src="https://gist.github.com/2710950.js?file=pygmrents"></script>

and then:

<script src="https://gist.github.com/2710950.js?file=gem albino"></script>

For Cloudbacon, I have decided to stick with the Albino gem. The syntax is
easier to write and much more svelte overall. In addition, another Github (I
hang out there a lot) user has a wonderful set of [css stylesheets][7] that
work flawlessly with Albino and Pygments. Simply include the gem in Nanoc's
Rules file, right before the routes, and add the css file (named 'default.css')
into the output directory. Easy - code highlighting.

Some people might ask why I didn't use the [colorize_syntax filter][8] offered
by Nanoc itself? Well I did get it to work; however, you need to break down the
css output and create your own stylesheet. I love writing [Sass][9] as much as
the next person but, automation is just that much cooler. Get your Nanoc site
under version control and try all three methods, see which one works best, and
get your code out of block quotes. Since the above several lines are bash, and
bash has no color, here is a simple ruby test:

<script src="https://gist.github.com/2710950.js?file=hello world"></script>

__Edit:__

Funny thing being, I now rely on gist code snippets to get the job done.

[9]:http://sass-lang.com/
[8]: #
[7]:https://github.com/richleland/pygments-css
[6]:https://github.com/github/albino
[5]:https://github.com/
[4]:http://coderay.rubychan.de/
[3]:http://pygments.org/
[2]:http://nanoc.stoneship.org/
[1]:http://wordpress.org/extend/plugins/search.php?q=code+highlighting
