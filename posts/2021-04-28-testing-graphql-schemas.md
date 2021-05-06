---
title: Testing GraphQL Schemas
date: '2021-04-29'
---

GraphQL still has quite the steep learning curve when it comes implementations.
Not to mention,
how does one go about testing each part of a GraphQL API?
Since GraphQL is easily mocked due to the decoupling of resolvers from their schema,
it's not all that complex to setup througough unit tests.

Before the code though,
it's very important to setup some guard rails beyond unit tests when it comes to your schema.
Specifically since chaning a schema (or any API) should be an iterative process.
Some great tools to think about to aid in this process with GraphQL include:

1. [A solid Linter][gqllint] to make sure the schema itself is properly written.
1. [GraphQL Inspector][gqlinsp] to ensure that changes to the schema don't breaking existing consumers.

The following also expects that developers have access to a .graphql representation of their schema,
or that one is generateable.

Since there is a need to mock the return data of your schema,
we need to pull in a few packages fromt the [graphql-tools][gtools] library.
Namely the `GraphQlFileLoader` class from `@graphql-tools/graphql-file-loader`,
`addMockToSchema` from `@graphql-tools/mock`, and
`loadSchemaSync` from `@graphql-tools/load`
These packages will allow the tests to introspect a `.graphql` file,
mock the return values and allow the suite's assertion matchers to work their magic.
It's totally ok to install these as dev dependencies since they are not a requirement (usually) for runtime.

```javascript
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addMocksToSchema } from '@graphql-tools/mock';
import { graphql } from 'graphql';

const __dirname = dirname(fileURLToPath(import.meta.url));
const schema = loadSchemaSync(join(__dirname, '../schema.graphql'), {
  loaders: [
    new GraphQLFileLoader(),
  ]
});

const mocks = {
  String: () => "Funzones",
  Boolean: () => false
}

const mockedSchema = addMocksToSchema({ schema, mocks })
```

Now that the schema is loaded,
the only thing left is to write a query and execute it with the [graphql][gql] package.

```javascript
const query = `
  query funzoneFinder {
    funzoneById(id: "512f5428-63d1-4bf4-8c23-467ac944e58d") { content { description, title } }
  }
`
const result = await graphql(mockedSchema, query)
t.deepLooseEqual(result.data, { productById: {
  content: {
    description: "Funzones",
    title: "Funzones"
  }
}}, "Funzones are actually fun")
```

The above matcher example utilizes the lightweight and fabulous [Tape][tape] testing library.
If most of an application is running outside of a browser,
it's a much more lightweight and performant way of testing over [Jest][jest]

With this setup,
a team can specifically test any access pattern that they choose.
In addition,
since these tests don't rely on slow resolvers,
they execute quickly leading to fast feedback as a graph is built out.

[gqllint]: https://github.com/cjoudrey/graphql-schema-linter
[gqlinsp]: https://github.com/kamilkisiela/graphql-inspector
[gtools]: https://www.graphql-tools.com/
[gql]: https://www.npmjs.com/package/graphql
[tape]: https://github.com/substack/tape
[jest]: https://jestjs.io/
