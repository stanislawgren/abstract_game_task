import { ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('game_players')
@ObjectType()
export class GamePlayers {
  @PrimaryGeneratedColumn()
  ID_game_player: number;

  @Column()
  ID_game: number;

  @Column()
  ID_player: number;

  @Column()
  ID_team: number;
}
