import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import config from "./config/linkDB.json";
import typeDefs from "./schema/index";
import resolvers from "./resolver/index";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function main() {
  try {
    await mongoose.connect(config.mongoURI, {
      autoIndex: false,
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log("mongoDB connected");

    const { url } = await startStandaloneServer(server, {
      listen: { port: Number(process.env.EXPRERSS_PORT) },
    });
    console.log(`🚀 Server listening at: ${url}`);
  } catch (err) {
    console.log("fail to init server", err.message);
    process.exit(1);
  }
}

main();
