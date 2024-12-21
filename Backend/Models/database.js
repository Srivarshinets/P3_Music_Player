import { MongoClient } from "mongodb";

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {};

const client = await MongoClient.connect(
  "mongodb://localhost:27017/music_player"
);
const coll = client.db("project_3").collection("music_player");
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();
