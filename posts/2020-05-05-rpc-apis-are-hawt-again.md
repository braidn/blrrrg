---
title: Remote Procedural Call Style APIs in 2020
date: '2020-05-05'
---

[RPC][rpc] doesn't get as much airtime as [GraphQL][gql] and even [REST][rst] these days.
However, if you are building a purely internal tool,
wont most of the endpoints skew towards [RPC][rpc] over anything else?
Even if a team picks [GraphQL][gql] as a means to communicate internally,
many of your queries and mutations are going to have a distinct [RPC][rpc] feel to them.

Coming to this conclusion,
after writing what feels like hundreds of REST APIs,
and a few GraphQL ones,
has been a bit of a surprise.
Especially with my strong emotions (positive) around [REST][rst] and [HATEOS][hat].

Due to all this API soul searching,
I decided to explore the current crop of [RPC][rpc] like libraries in [Node][node].
The most promising one turned out to be one titled: [Wildcard.js][wc].
Wildcard acts like most [Express][exp] middleware.
It creates a catch all namespace that then calls function names depending on the route called in the namespace. 

Most RPC like APIs,
much like GraphQL adopt a POST only approach to HTTP Methods
(more [info on JSON RPC][jsonRpc]).
[Wildcard][wc] goes one step further here;
providing developers with a GET route for each of its generated POST routes.
This allows developers a way to view and explore the API much like [GraphiQL][giql].

Polka, is a splendid and now my favorite HTTP library for [Node][node].
It's small, simple, and has a lightweight dependency footprint.
However,
its' middleware signature differs significantly from that of [Express][exp].
This means that most middleware that functions with [Express][exp],
won't with Polka.
Due to this,
the example below and repo showcases a manual way of setting up [Wildcard][wc] with any [Node][node] http library or framework.

Here's to more Functions over HTTP powered by JavaScripts new love of type system (Flow, Typescript or Hegel).

Example server config:

```js
const polka = require("polka");
const { getApiHttpResponse } = require("@wildcard-api/server");
polka()
  .all("/_wildcard_api/*", async (req, res) => {
    const { url, method, body: originalBody } = req;
    const rpcResponse = await getApiHttpResponse(
      { url, method, originalBody },
      {}
    );
    const { body, statusCode, contentType, etag } = rpcResponse;

    res.writeHead(statusCode, { "Content-Type": contentType, ETag: etag });
    res.end(JSON.stringify({ body }));
  })
  .listen(3000, (err) => {
    if (err) {
      throw err;
    }

    console.log(`running... in ${process.env.NODE_ENV} mode`);
  });
```

[Link to repository][repo]

What's your opinion on RPC style APIs for internal consumption?
[Reach out to me on Twitter and let's chat][twit]

[gql]: https://graphql.org/

[rst]: https://en.wikipedia.org/wiki/Representational_state_transfer

[rpc]: https://en.wikipedia.org/wiki/Remote_procedure_call

[hat]: https://restfulapi.net/hateoas/

[node]: https://nodejs.org/en/

[wc]: https://github.com/reframejs/wildcard-api

[exp]: https://expressjs.com/

[jsonRpc]: https://www.jsonrpc.org/specification

[giql]: https://github.com/graphql/graphiql

[repo]: https://github.com/braidn/wildcard-polka

[twit]: https://twitter.com/braidn/
