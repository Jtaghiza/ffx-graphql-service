import {Inject, Injectable} from "@nestjs/common";
import {Author} from "./models/author.model";
import {UpdatedAuthor} from "./dto/updated-author.input";
import {NewAuthor} from "./dto/new-author.input";
import {Datastore} from "@google-cloud/datastore/build/src";

@Injectable()
export class AuthorService {
    constructor(
        @Inject('DS') private readonly  dataStore: Datastore,
    ) {}

    create(data: NewAuthor) {

        return this.dataStore.save({key: this.dataStore.key('author'), data});
    }

     findOneById = async (id: number) => {
        const query = this.dataStore.createQuery('author')
            .order('firstName', {descending: true})
            .limit(10);

        const response = await this.dataStore.runQuery(query)
            .then((resp) => {
                console.log('response:', resp);
                return resp;
            });
        console.log(response);
        return response;
    }

    // findAll = () => this.authorRepo.getAll();
    //
    // updateFirstName = (author: UpdatedAuthor) => {
    //     const updatedAuthor: Author = this.authorRepo.get(author.id);
    //     updatedAuthor.firstName = author.firstName;
    //     this.authorRepo.update(updatedAuthor);
    //     return this.authorRepo.get(author.id);
    // }



}
