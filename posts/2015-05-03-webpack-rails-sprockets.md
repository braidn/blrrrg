---
title: Webpack Hot Reload And Rails
date: '2015-05-03'
---

[Webpack][1] seems to be getting plenty of lip service these days.
Doubly so in the React community which means most of Facebook.
Since Rails leans so heavily on the asset pipeline,
how can we merge ES6, modules, [and other bits of Webpack greatness][2]
with the age old,
do one thing well: [Sprockets][3]

The following [two scripts][4] (one used for Development, the other Production),
show that Webpack can easily integrate with Rail's existing asset pipeline.
While giving way to utilizing many of the best features hidden in Webpack.

A few caveats about running these scripts:

1. The directory structure assumes a `./client` folder,
top level in your Rails app.
1. The common/development script assumes that assets  will be served from a server.
This means you will need a few `javascript_include_tags` wrapped in `Rails.env`
1. The two urls for this server are: http://localhost:8080/webpack-dev-server.js
and http://localhost:8080/bundle.js.
1. To run the Dev script: `$(npm bin)/webpack-dev-server --config webpack.config.js --hot --progress --inline --display-chunks`
1. And the Prod script: `$(npm bin)/webpack --config webpack.production.js`
1. Currently there is only one 'entry point' defined as 'app'.
This will need to be modified depending on the entry point or bootstrap script.
1. The Production script builds one file into the app/assets/javascripts directory.

That's it!

<script src="https://gist.github.com/braidn/4a11487a59f16b196fa7.js"></script>

[1]: http://webpack.github.io/
[2]: https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
[3]: https://github.com/sstephenson/sprockets
[4]: https://gist.github.com/braidn/4a11487a59f16b196fa7
