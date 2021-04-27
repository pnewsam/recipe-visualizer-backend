import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { IngredientResolver } from "./resolvers/IngredientResolver";

const PORT = 4000;

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [IngredientResolver],
  });
  const server = new ApolloServer({ schema });

  const app = express();
  server.applyMiddleware({ app });
  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

main();
