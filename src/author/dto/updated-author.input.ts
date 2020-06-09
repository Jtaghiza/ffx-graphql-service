import {Field, InputType, Int} from '@nestjs/graphql';

@InputType()
export class UpdatedAuthor {
    @Field(type => Int)
    id: number;

    @Field()
    firstName: string;
}
