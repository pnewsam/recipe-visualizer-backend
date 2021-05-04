import { InputType, Field } from "type-graphql";

@InputType()
export class CreateRecipeInput {
  @Field()
  name: string;

  @Field()
  portion_yield: number;

  @Field()
  cooking_time_in_minutes: number;
}
