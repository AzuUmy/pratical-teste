import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '../Schema/item.schema';

@Controller('items')
export class ItemsController {

   constructor(private readonly itemsService: ItemsService ) {}

   @Post()
   async create(@Body() body: {name: string; description: string }): Promise<Item> {
      return this.itemsService.create(body.name, body.description);
   }

   @Get()
   async fndAll(): Promise<Item[]>{
      return this.itemsService.findAll();
   }

   @Get(':id')
   async findOne(@Param('id') id: string): Promise<Item> {
      return this.itemsService.findOne(id);
   }

   @Put(':id')
   async update(@Param('id') id: string, @Body() body: { name: string; description: string})
   : Promise<Item>{
      return this.itemsService.update(id, body.name, body.description);
   }

   @Delete(':id')
   async delete(@Param('id') id: string): Promise<Item>{
      return this.itemsService.delete(id);
   }

}
