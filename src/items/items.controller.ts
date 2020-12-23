import { Body, Controller, Delete, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { fileURLToPath } from 'url';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

  constructor(
    private readonly service: ItemsService
  ) { }

  @Get()
  findAll(
    @Res() res: Response
  ) {
    this.service.findAll().then(data => {
      res.status(200).json(data);
    }, err => {
      res.status(500).json(err);
    });
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @UploadedFile() file,
    @Body() body,
    @Res() res: Response
  ) {
    // console.log(file.originalname)
    body['image'] = file ? file.originalname : 'blank.jpg';
    this.service.create(body).then(data => {
      res.status(201).json(data);
    }, err => {
      res.status(500).json(err);
    });
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
    @Res() res: Response
  ) {
    this.service.delete(id).then(data => {
      res.status(200).json(data);
    }, err => {
      res.status(500).json(err);
    });
  }
}
