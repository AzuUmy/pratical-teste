import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from '../Schema/item.schema';
import { Sequence } from '../Schema/sequenceSquema';

@Injectable()
export class ItemsService {
   constructor(
      @InjectModel('Item') private readonly itemModel: Model<Item>,
      @InjectModel('Sequence') private readonly sequenceModel: Model<Sequence>
   ) {}

   private async getNextSequence(sequenceName: string): Promise<Number> {
      const sequence = await this.sequenceModel.findOneAndUpdate(
         {_id: sequenceName },
         {$inc: {sequence_value: 1} },
         { new: true, upsert: true }
      );
      return sequence.sequence_value;
   }


  async create(name: string, description: string): Promise<Item>{
      const id = await this.getNextSequence('items');
      const newItem = new this.itemModel({ _id: id, name, description});
      return newItem.save();
  }

  async findAll(): Promise<Item[]> {
   return this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
      return this.itemModel.findById(id).exec();
  }

  async update(id: string, name: string, description: string): Promise<Item> {
      return this.itemModel.findByIdAndUpdate(id, {name, description}, {new: true}).exec();
  }

  async delete(id: string): Promise<Item> {
      return this.itemModel.findByIdAndDelete(id).exec();
  }

}
