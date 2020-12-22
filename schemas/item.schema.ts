import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  image: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
