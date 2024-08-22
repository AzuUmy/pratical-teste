import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import {  ItemSchema} from '../Schema/item.schema';
import { SequenceSchema } from 'src/Schema/sequenceSquema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Item', schema: ItemSchema },
      {name: 'Sequence', schema: SequenceSchema}  
    ]),
  ],
  providers: [ItemsService],
  controllers: [ItemsController]
})
export class ItemsModule {}
