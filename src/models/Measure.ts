import { ObjectType, Field, ID } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { IngredientMeasure } from "./IngredientMeasure";

@Entity()
@ObjectType()
export class Measure extends BaseEntity {
  // ie. Tablespoon, teaspoon
  // Cup,
  // Number of items
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column("varchar")
  name: string;

  @Field(() => [IngredientMeasure])
  @OneToMany(
    (type) => IngredientMeasure,
    (ingredientMeasure) => ingredientMeasure.ingredient
  )
  ingredientMeasures: IngredientMeasure;
}
