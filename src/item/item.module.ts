import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemCommand } from './item.command';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../models/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemService, ItemCommand],
})
export class ItemModule {}
