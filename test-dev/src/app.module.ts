import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo-db:27017/nest'), 
    ItemsModule,
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
