import { Module } from '@nestjs/common';

import {GraphQLModule} from "@nestjs/graphql";
import {AuthorsModule} from "./author/authors.module";
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
      AuthorsModule,
      ItemModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
