import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Book {
    @Field(type => Int)
    id: number;

    @Field({nullable: true})
    name?: string;
}
