import { Command, Positional, Option } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { ItemService } from './item.service';

@Injectable()
export class ItemCommand {
  constructor(private readonly itemService: ItemService) {}

  @Command({
    command: 'create:item <name>',
    describe: 'create an item',
  })
  async create(
    @Positional({
      name: 'name',
      describe: 'item name',
      type: 'string',
    })
    name: string,
    @Option({
      name: 'description',
      describe: 'item description',
      type: 'string',
      alias: 'd',
      required: false,
    })
    description: string,
  ) {
    this.itemService.add({
      name,
      description,
    });
  }
}
