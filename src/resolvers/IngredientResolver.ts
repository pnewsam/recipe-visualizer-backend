import { Resolver, Query, Arg } from "type-graphql";
import { Ingredient } from "../models/Ingredient";

@Resolver()
export class IngredientResolver {
  @Query(() => [Ingredient])
  ingredients() {
    return Ingredient.find();
  }

  @Query(() => Ingredient)
  ingredient(@Arg("id") id: string) {
    return Ingredient.findOne({ where: { id } });
  }
}
