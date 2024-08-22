import { Schema, Document} from 'mongoose';

export interface Sequence extends Document {
   _id: string;
   sequence_value: number;
}

export const SequenceSchema = new Schema ({
   _id: { type: String, required: true},
   sequence_value: {type: Number, default: 0}
});
