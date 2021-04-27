import { InputType, Field } from "type-graphql";

@InputType()
export class CreateIngredientInput {
  @Field()
  name: string;
}
