import { Schema, Document } from 'mongoose';

export interface Item extends Document {
  _id: number
  name: string;
  description: string;
}

export const ItemSchema = new Schema({
   _id: { type: Number, required: true },
   name: { type: String, required: true },
   description: { type: String, required: true },
});