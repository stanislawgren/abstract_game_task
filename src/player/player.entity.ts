import { ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Players {
  @PrimaryGeneratedColumn()
  ID_player: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  number: number;

  @Column()
  ID_team: number;
}
