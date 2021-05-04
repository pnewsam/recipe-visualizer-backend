import { ObjectType, Field, ID } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Ingredient } from "./Ingredient";

@Entity()
@ObjectType()
export class Recipe extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column("varchar")
  name: string;

  @Field(() => Number)
  @Column("int")
  portion_yield: number;

  @Field(() => Number)
  @Column("int")
  cooking_time_in_minutes: number;

  @Field(() => String)
  @Column("text")
  instructions: string;

  @Field(() => [Ingredient])
  @OneToMany((type) => Ingredient, (ingredient) => ingredient.recipe)
  ingredients: Ingredient[];
}
