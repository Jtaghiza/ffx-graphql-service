import {Injectable} from "@nestjs/common";
import {InMemoryDBService} from "@nestjs-addons/in-memory-db";
import {Author} from "./models/author.model";
import {UpdatedAuthor} from "./dto/updated-author.input";
import {NewAuthor} from "./dto/new-author.input";

@Injectable()
export class AuthorService {
    constructor(private readonly authorRepo: InMemoryDBService<Author>) {
        this.seedDataBase();
    }

    create(data: NewAuthor) {
        const newAuthor = this.authorRepo.create(data);
        return newAuthor;
    }

    findOneById = (id: number) => this.authorRepo.get(id);

    findAll = () => this.authorRepo.getAll();

    updateFirstName = (author: UpdatedAuthor) => {
        const updatedAuthor: Author = this.authorRepo.get(author.id);
        updatedAuthor.firstName = author.firstName;
        this.authorRepo.update(updatedAuthor);
        return this.authorRepo.get(author.id);
    }

    private seedDataBase() {
        const recordFactory =
            (idx: number): Partial<Author> => ({id: idx,
                firstName: `First name${idx}`,
                lastName: `Last name${idx}`,
                books: [{id: idx, name: `book${idx}`}]
            });
        this.authorRepo.seed(recordFactory, 10);
    }

}
