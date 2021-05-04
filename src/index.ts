import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { IngredientResolver } from "./resolvers/IngredientResolver";
import { RecipeResolver } from "./resolvers/RecipeResolver";

const PORT = 4000;
const FRONTEND_URI = "http://localhost:3000";

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [IngredientResolver, RecipeResolver],
  });
  const cors = {
    origin: FRONTEND_URI,
  };
  const server = new ApolloServer({ schema, cors });

  server.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000/graphql`)
  );
};

main();
