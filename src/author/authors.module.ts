import {Module} from "@nestjs/common";
import {AuthorsResolver} from "./author.resolver";
import {AuthorService} from "./author.service";
import {InMemoryDBModule} from "@nestjs-addons/in-memory-db";
import {PubSub} from "graphql-subscriptions";

@Module({
    imports: [InMemoryDBModule.forFeature('Author', {})],
    providers: [
        AuthorsResolver,
        AuthorService,
        {
            provide: 'PUB_SUB',
            useValue: new PubSub(),
        }
    ],
})
export class AuthorsModule {
}
