import {Args, Int, Mutation, Parent, Query, ResolveField, Resolver, Subscription} from "@nestjs/graphql";
import {Author} from "./models/author.model";
import {AuthorService} from "./author.service";
import {UpdatedAuthor} from "./dto/updated-author.input";
import {PubSub} from 'graphql-subscriptions'
import {NewAuthor} from "./dto/new-author.input";
import {Inject} from "@nestjs/common";


@Resolver(of => Author)
export class AuthorsResolver {
    constructor(
        private authorsService: AuthorService,
        @Inject('PUB_SUB') private pubSub: PubSub
    ) {}

    @Query(returns => Author)
    async author(@Args('id', { type: () => Int }) id: number) {
        return this.authorsService.findOneById(id);
    }

    @Query(returns => [Author])
    async authors() {
        return this.authorsService.findAll()
    }

    @Mutation(returns => Author)
    async updateAuthorFirstName(@Args('updatedAuthor') author: UpdatedAuthor) {
        return this.authorsService.updateFirstName(author);
    }

    @Mutation(returns => Author)
    async addAuthor(
        @Args('newAuthor') newAuthor: NewAuthor,
    ): Promise<Author> {
        const author = await this.authorsService.create(newAuthor);
        await this.pubSub.publish('authorAdded', {authorAdded: author});
        return author;
    }

    @Subscription(returns => Author, {
        resolve: value =>
        {
            value.authorAdded.firstName = 'jermoe'
            return value.authorAdded
        }
    })
    authorAdded() {
        return this.pubSub.asyncIterator('authorAdded');
    }
}
