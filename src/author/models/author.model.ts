import {Field, Int, ObjectType} from "@nestjs/graphql";
import {Book} from "./book.model";
import {Item} from "../../item/item.model";

@ObjectType()
export class Author {
    @Field(type => Int)
    id: number;

    @Field({nullable: true})
    firstName?: string;

    @Field({nullable: true, description: 'This is the last name', deprecationReason: 'This has been deprecated and this is the reason'})
    lastName?: string;

    @Field(type => [Book])
    books: Book[]

    @Field(type => [Item])
    items: Item[];
}
