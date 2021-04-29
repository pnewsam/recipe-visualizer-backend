import { ObjectType, Field, ID } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { Recipe } from "./Recipe";
import { Food } from "./Food";

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
}
