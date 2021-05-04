import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Recipe } from "../models/Recipe";
import { CreateRecipeInput, UpdateRecipeInput } from "../inputs";

@Resolver()
export class RecipeResolver {
  @Query(() => [Recipe])
  recipes() {
    return Recipe.find();
  }

  @Query(() => Recipe)
  recipe(@Arg("id") id: string) {
    return Recipe.findOne({ where: { id } });
  }

  @Mutation(() => Recipe)
  async createRecipe(@Arg("data") data: CreateRecipeInput) {
    const recipe = Recipe.create(data);
    await recipe.save();
    return recipe;
  }

  @Mutation(() => Recipe)
  async updateRecipe(
    @Arg("id") id: string,
    @Arg("data") data: UpdateRecipeInput
  ) {
    const recipe = await Recipe.findOne({ where: { id } });
    if (!recipe) throw new Error("Recipe not found!");
    Object.assign(recipe, data);
    await recipe.save();
    return recipe;
  }

  @Mutation(() => Boolean)
  async deleteRecipe(@Arg("id") id: string) {
    const recipe = await Recipe.findOne({ where: { id } });
    if (!recipe) throw new Error("Recipe not found!");
    await recipe.remove();
    return true;
  }
}
