---
title: Remote Procedural Call Style APIs in 2020
date: '2020-05-05'
---

RPC really doesn't get as much air time as GraphQL and even REST these days.
However if you are building a purely internal tool,
doesn't all of your endpoints skew towards RPC over anything else?

Even if a team picks GraphQL as a means to communicate internally,
many of your queries and mutations are going to have a very RPC feel to them.

Coming to this conclusion after writing what feels like hundreds of REST APIs and a few GraphQL ones has been a bit of a surprise.
Especially with to my strong emotions (positive) around REST and HaTEOS.

Due to all this API soul searching,
I decided to explore the current crop of RPC like libraries in Node.
The most promising one turned out to be one named Wildcard.js.

Wildcard acts like most middleware.
It creates a catch all namespace that then calls function names depending on the route called in the namespace. 

Most RPC like APIs,
much like GraphQL adopt a POST only approach to HTTP Methods. *link here to the RPC over JSON spec*. Wildcard also provides a GET route for each of its generated POST routes.
Allowing developers a way to view and explore the API much like GraphIQL.
One of my favorite lightweight server libraries for Node is named Polka.
It's small simple and has an extremely lightweight dependency footprint.
However it doesn't allow for the same type of middleware as Express.
Due to this,
the following repo displays a very manual way of setting up Wildcard with any Server library. Here's to more Functions over HTTP powered by some type system (Flow, Typescript or Hegel).
