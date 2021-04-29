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
export class Food extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column("varchar")
  name: string;

  @Field(() => Array)
  @OneToMany((type) => Ingredient, (ingredient) => ingredient.food)
  ingredients: Ingredient[];
}
