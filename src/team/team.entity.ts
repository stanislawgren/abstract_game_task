import { ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Teams {
  @PrimaryGeneratedColumn()
  ID_team: number;

  @Column()
  name: string;
}
