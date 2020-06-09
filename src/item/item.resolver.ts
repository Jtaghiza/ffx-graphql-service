import {Args, Int, Parent, Query, ResolveField, Resolver} from "@nestjs/graphql";
import {Item} from "./item.model";
import {ItemService} from "./item.service";

@Resolver(of => Item)
export class ItemResolver {
    constructor(
        private itemService: ItemService,
    ) {}

    @Query(returns => Item)
    async item(@Args('id', { type: () => Int }) id: number) {
        return this.itemService.findOneById(id);
    }
}
