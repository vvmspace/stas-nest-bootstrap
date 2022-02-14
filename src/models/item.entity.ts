// item.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from 'typeorm';

@Entity({ name: 'item' })
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({
    nullable: false,
    select: false,
    default: (): string => 'CURRENT_TIMESTAMP',
    type: 'timestamp without time zone',
  })
  public createAt!: Date;
}