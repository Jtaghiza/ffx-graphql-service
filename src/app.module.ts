import { Module } from '@nestjs/common';

import {GraphQLModule} from "@nestjs/graphql";
import {AuthorsModule} from "./author/authors.module";
import {InMemoryDBModule} from "@nestjs-addons/in-memory-db";
import {join} from 'path';
import {ItemModule} from "./item/item.module";

@Module({
  imports: [
      GraphQLModule.forRoot({
          // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          autoSchemaFile: true,
          debug: true,
          playground: true,
          installSubscriptionHandlers: true,
      }),
      InMemoryDBModule.forRoot(),
      AuthorsModule,
      ItemModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
