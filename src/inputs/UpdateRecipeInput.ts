import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateRecipeInput {
  @Field({ nullable: true })
  name?: string;
}
