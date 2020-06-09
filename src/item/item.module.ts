import {Module} from "@nestjs/common";
import {ItemResolver} from "./item.resolver";
import {ItemService} from "./item.service";
import {InMemoryDBModule} from "@nestjs-addons/in-memory-db";

@Module({
    imports: [InMemoryDBModule.forFeature('Item', {})],
    providers: [ItemResolver, ItemService],
})
export class ItemModule {}
