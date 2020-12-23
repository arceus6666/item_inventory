import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop({
    type: String,
    required: true
  })
  name: string;

  @Prop({
    type: String,
    required: true
  })
  price: string;

  @Prop({
    type: String,
    default: 'blank.jpg'
  })
  image: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
