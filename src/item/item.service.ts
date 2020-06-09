import {Injectable} from "@nestjs/common";
import {InMemoryDBService} from "@nestjs-addons/in-memory-db";
import {Item} from "./item.model";

@Injectable()
export class ItemService {
    constructor(private readonly itemService: InMemoryDBService<Item>) {
        this.seedDataBase();
    }

    create(data: Item) {
        return this.itemService.create(data);
    }

    findOneById = (id: number) => {
        const result = this.itemService.get(id);
        return result;
    };

    private seedDataBase() {
        const recordFactory =
            (idx: number): Partial<Item> => ({id: idx, itemName: `Item name${idx}`, stats: `Stat${idx}`});
        this.itemService.seed(recordFactory, 10);
    }

}
