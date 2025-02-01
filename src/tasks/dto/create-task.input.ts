import { Field, InputType } from "@nestjs/graphql";
  
@InputType()
export class CreateTaskInput {
    @Field()
    title: string;

    @Field()
    priority: string;

    @Field({ defaultValue: false })
    completed: boolean;
}
