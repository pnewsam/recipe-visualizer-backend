import { ObjectType, Field, ID } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { Ingredient } from "./Ingredient";
import { Measure } from "./Measure";

@Entity()
@ObjectType()
export class IngredientMeasure extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => Number)
  @Column()
  count: number;

  @Field(() => [Ingredient])
  @ManyToOne(
    (type) => Ingredient,
    (ingredient) => ingredient.ingredientMeasures
  )
  ingredient: Ingredient;

  @Field(() => Measure)
  @ManyToOne((type) => Measure, (measure) => measure.ingredientMeasures)
  measure: Measure;
}
