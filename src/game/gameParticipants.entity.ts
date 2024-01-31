import { ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('game_participants')
@ObjectType()
export class GameParticipants {
  @PrimaryGeneratedColumn()
  ID_participation: number;

  @Column()
  ID_game: number;

  @Column()
  ID_team: number;
}
