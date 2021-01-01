---
title: DynamoDB Without DocumentClient in AWS's V3 SDK
date: '2020-12-31'
---

[AWS recently announced general availability of their new (V3) version of their JavaScript SDK][sdk].
The V2 version of the SDK packaged _all_ of AWS's core services in one big export.
This meant that it was easy to get access to a myriad of services with one `npm install`.
However,
the downsize was the general HUGENESS of the node module.
If folks were relying on a specific version of the V2 SDK by building it into a layer,
this would mean a large performance loss in loading all that code into each Lambda cold start.

With the above announcement though,
Those hefty layers are a thing of the past.
Programmers can pick and choose the **exact** packages they need
and bundle them together in a hyper small, performant layer.

Not everything is roses and peanut butter with this new release though.
AWS left something pretty major out of this new SDK: [the DynamoDB DocumentClient][ddb].
The DocumentClient has been a key tool in coersing JavaScript objects into and out of DynamoDB.
This coupled with 'ORM like methods (`query`, `get`, `put`, etc) made this module indispensable.
Not having access to these niceties would set back productivity for any programmer.
Forcing them to stick with the older SDK version.

Fear not; there is a path forward!
The SDK exposes a [new package titled: 'util-dynamodb'][util].
Specifically, two helper methods that will make our marshalling lives easier: `marshall` and `unmarshall`.
If you aren't familiar with the term: 'marshalling',
[this article has you covered][marsh].

There is the ability to serialize or 'marshall' a JavaScript object into the expected DynamoDB 'Item' structure
as well as unmarshall the response back into a 'handy' JavaScript object.
What does this look like in practice,
specifically around [Create, Read, Update, Delete][crud] style actions?

### Setup

```javascript
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { DynamoDB } from "@aws-sdk/client-dynamodb";

const ddb = new DynamoDB({});
```

Make sure to `npm i` these modules but,
importing them where needed is key (as with all node modules).
Secondly, we need a new instance of the DynamoDB class to alter items in the database.

### Create

```javascript
async function createNote(note: Note) {
  const params = {
    ...defaultParams,
    Item: marshall(note),
  };

  await ddb.putItem(params);
  return note
}
```

Marshalling the item into a format for DynamoDB is required when inserting them into the database.

### Read

```javascript
async function getNoteById(id: string) {
  const params = {
    ...defaultParams,
    Key: marshall({ id }),
  };

  const { Item } = await ddb.getItem(params);
  return Item ? unmarshall(Item) : undefined;
}
```

Like with the create function above,
the 'Key' to the `getItem` (`id` in this case) must be marshalled.
Along with that,
the response from the database must be unmarshalled back to a JavaScript object.

### Update

```javascript
async function updateNote(note: Note) {
  let params: UpdateItemInput = {
    ...defaultParams,
    Key: marshall({
      id: note.id,
    }),
    UpdateExpression: "",
    ReturnValues: "UPDATED_NEW",
  };

  let prefix = "set ";
  Object.keys(note).forEach((attr: string) => {
    if (attr !== "id") {
      params["UpdateExpression"] += `${prefix}#${attr} = :{attr}`;
      params["ExpressionAttributeValues"]![`:${attr}`] = note[attr];
      params["ExpressionAttributeNames"]![`#${attr}`] = attr;
      prefix = ", ";
    }
  });
}
await ddb.updateItem(params);
return note;
```

This is TypeScript after all...
Meaning we need some foreign `!` methods between attribute assignment.
This _just_ means that we are informing the compiler that we 'guarentee' that those assignments will never be `undefined`.
Besides this,
there isn't anything special here.
We are building the value and names expressions for attributes that need to be updated and passing it to the `updateItem` function

### Delete

```javascript
async function deleteNote(id: string) {
  const params = {
    ...defaultParams,
    Key: marshall({
      id,
    }),
  };

  await ddb.deleteItem(params);
  return id;
}
```

Removing or deleting an item is just as simple reading a single note by id.
The id is marshalled and the params are past onto the `deleteItem` function

And that's it!
If this were a Lambda function,
there would be a massive invocation savings by _only_ needing to package a layer with these two modules,
versus the entire V2 SDK.
Sure there is tree shaking, blah, blah, blah but,
this method guarentees that the invocation environment has _only_ the needed modules.

What are folks plans when it comes to moving to this new V3 SDK?
Reach out on [Twitter][twit] and share your upgrading experiences.

[sdk]: https://aws.amazon.com/blogs/developer/modular-aws-sdk-for-javascript-is-now-generally-available/
[ddb]: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-document-client.html
[util]: https://github.com/aws/aws-sdk-js-v3/blob/master/packages/util-dynamodb/README.md
[marsh]: https://en.wikipedia.org/wiki/Marshalling_(computer_science)
[crud]: https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
[twit]: https://twitter.com/braidn
