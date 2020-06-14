import {Injectable} from "@nestjs/common";
import {Item} from "./item.model";

@Injectable()
export class ItemService {
    constructor() {}

    create(data: Item) {
        return {}
    }

    findOneById = (id: number) => {
        return {};
    };

}
