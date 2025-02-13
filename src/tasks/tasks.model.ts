import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Task {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;

    @Field()
    priority: string;

    @Field()
    createdAt: Date;
}