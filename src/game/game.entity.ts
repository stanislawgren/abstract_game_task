import { ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Games {
  @PrimaryGeneratedColumn()
  ID_game: number;

  @Column()
  location: string;

  @Column()
  date: Date;

  @Column()
  time: string;
}
