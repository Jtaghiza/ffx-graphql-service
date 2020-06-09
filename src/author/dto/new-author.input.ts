import {Field, InputType, Int} from '@nestjs/graphql';

@InputType()
export class NewAuthor {
    @Field()
    firstName: string;

    @Field({nullable: true})
    lastName: string;
}
