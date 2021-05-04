import { ObjectType, Field, ID } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GroceryCategory } from "./GroceryCategory";
import { Ingredient } from "./Ingredient";

@Entity()
@ObjectType()
export class Food extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column("varchar")
  name: string;

  @Field(() => [Ingredient])
  @OneToMany((type) => Ingredient, (ingredient) => ingredient.food)
  ingredients: Ingredient[];

  @Field(() => [GroceryCategory])
  @ManyToOne(
    (type) => GroceryCategory,
    (groceryCategory) => groceryCategory.foods
  )
  groceryCategory: GroceryCategory;
}
