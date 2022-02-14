import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../models/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepo: Repository<Item>,
  ) {}
  async add(item: Partial<Item>): Promise<any> {
    // TODO: check DB
    const it = await this.itemRepo.create(item);
    console.log('item added:', item, it);
  }
}
