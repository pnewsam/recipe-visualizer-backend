import { ObjectType, Field, ID } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Food } from "./Food";

@Entity()
@ObjectType()
export class GroceryCategory extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column("varchar")
  name: string;

  @Field(() => [Food])
  @OneToMany((type) => Food, (food) => food.groceryCategory)
  foods: Food[];
}
