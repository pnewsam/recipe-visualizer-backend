import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateIngredientInput {
  @Field({ nullable: true })
  name?: string;
}
