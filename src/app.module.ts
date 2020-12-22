import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/rose_store', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'public')
    }),
    ItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
