import {Module} from "@nestjs/common";
import {AuthorsResolver} from "./author.resolver";
import {AuthorService} from "./author.service";
import {PubSub} from "graphql-subscriptions";
import {Datastore} from "@google-cloud/datastore/build/src";


const myDS = new Datastore()

@Module({
    imports: [],
    providers: [
        AuthorsResolver,
        AuthorService,
        {
            provide: 'PUB_SUB',
            useValue: new PubSub(),
        },
        {
            provide: 'DS',
            useValue: myDS
        }
    ],
})
export class AuthorsModule {
}
