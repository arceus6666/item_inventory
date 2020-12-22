import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from 'schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name)
    private model: Model<ItemDocument>
  ) { }

  async create(data: Item) {
    const i = new this.model(data);
    return i.save();
  }

  async findAll() {
    return this.model.find().exec();
  }

  async delete(id) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
