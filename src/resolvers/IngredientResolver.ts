import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Ingredient } from "../models/Ingredient";
import { CreateIngredientInput, UpdateIngredientInput } from "../inputs";

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

  @Mutation(() => Ingredient)
  async createIngredient(@Arg("data") data: CreateIngredientInput) {
    const ingredient = Ingredient.create(data);
    await ingredient.save();
    return ingredient;
  }

  @Mutation(() => Ingredient)
  async updateIngredient(
    @Arg("id") id: string,
    @Arg("data") data: UpdateIngredientInput
  ) {
    const ingredient = await Ingredient.findOne({ where: { id } });
    if (!ingredient) throw new Error("Ingredient not found!");
    Object.assign(ingredient, data);
    await ingredient.save();
    return ingredient;
  }

  @Mutation(() => Boolean)
  async deleteIngredient(@Arg("id") id: string) {
    const book = await Ingredient.findOne({ where: { id } });
    if (!book) throw new Error("Ingredient not found!");
    await book.remove();
    return true;
  }
}
