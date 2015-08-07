---
title: Prose.io Tweaks
layout: post
---

[Prose.io][1] is one of the best ways to interact with markdown-style form blog content. It has allowing me to write on the web, commit to GitHub and have cloudbacon run its tests ( yes it is a blog but, yes I am a programmer so most of my shit has tests ), and auto deploy to Heroku. Recently however, I have wanted to streamline this process.

Prose gives you the ability to define specific metadata attributes that are editable in the sidebar. In addition, and really what I was looking for, it gives the user the ability to only allow one directory to be editable. This is awesome because it shows the user this very directory instead of forcing them to dig their way into a directory hierarchy to find their blog content.

Without further ado: the following [gist][2] is what cloudbacon is rocking. Pay special attention to the naming of the file if you don't use [Jekyll][3] ( the underscore is required ).

<script src="https://gist.github.com/braidn/f82fd63ac00955eeaeb3.js"></script>

[1]: http://prose.io/#about
[2]: https://gist.github.com/braidn/f82fd63ac00955eeaeb3
[3]: http://jekyllrb.com/
