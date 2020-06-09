import {Field, Int, ObjectType} from "@nestjs/graphql";
import {InMemoryDBEntity} from "@nestjs-addons/in-memory-db";
// import {Post} from "./post";

@ObjectType()
export class Item {
    @Field(type => Int)
    id: number;

    @Field({nullable: true})
    itemName?: string;

    @Field({nullable: true, description: 'This is the last name', deprecationReason: 'This has been deprecated and this is the reason'})
    stats?: string;

    // @Field(type => [Post])
    // posts: Post[]
}

// interface AuthorEntity extends InMemoryDBEntity {
//     firstName?: string;
//     lastName?: string
// }
