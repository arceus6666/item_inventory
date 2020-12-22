import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from 'schemas/item.schema';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Item.name,
      schema: ItemSchema
    }]),
    MulterModule.register({
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, join(__dirname, '..', '..','..', 'public'))
        }, filename: (req, file, cb) => {
          cb(null, file.originalname)
        }
      })
    }),
  ],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule { }
