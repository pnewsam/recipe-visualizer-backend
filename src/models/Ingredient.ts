import { ObjectType, Field, ID } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Recipe } from "./Recipe";
import { Food } from "./Food";
import { IngredientMeasure } from "./IngredientMeasure";

@Entity()
@ObjectType()
export class Ingredient extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column("varchar")
  name: string;

  @Field(() => Recipe)
  @ManyToOne((type) => Recipe, (recipe) => recipe.ingredients)
  recipe: Recipe;

  @Field(() => Food)
  @ManyToOne((type) => Food, (food) => food.ingredients)
  food: Food;

  @Field(() => IngredientMeasure)
  @OneToMany(
    (type) => IngredientMeasure,
    (ingredientMeasure) => ingredientMeasure.ingredient
  )
  ingredientMeasures: IngredientMeasure;
}
