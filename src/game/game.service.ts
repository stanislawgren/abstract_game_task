import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Games } from './game.entity';
import { GameParticipants } from './gameParticipants.entity';
import { Game, GameParticipant, GamePlayer } from 'src/graphql';
import { GamePlayers } from './gamePlayers.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Games)
    private readonly gamesRepository: Repository<Game>,

    @InjectRepository(GameParticipants)
    private readonly gameParticipantsRepository: Repository<GameParticipant>,

    @InjectRepository(GamePlayers)
    private readonly gamePlayersRepository: Repository<GamePlayer>,
  ) {}

  async findAllGames(): Promise<Games[]> {
    return await this.gamesRepository.find();
  }

  async findAllGameParticipants(): Promise<GameParticipant[]> {
    return await this.gameParticipantsRepository.find();
  }

  async findOneGameById(id: number): Promise<Game> {
    return await this.gamesRepository.findOne({ where: { ID_game: id } });
  }

  async findGameParticipantsByGameId(id: number): Promise<GameParticipant[]> {
    return await this.gameParticipantsRepository.find({
      where: { ID_game: id },
    });
  }

  async findAllGamePlayers(): Promise<GamePlayer[]> {
    return await this.gamePlayersRepository.find();
  }

  async findGamePlayersForTeam(id: number): Promise<GamePlayer[]> {
    return await this.gamePlayersRepository.find({ where: { ID_team: id } });
  }

  async findGamePlayersForGame(ids: number[]): Promise<(GamePlayer | any)[]> {
    const gamePlayers = await this.gamePlayersRepository.find({
      where: { ID_game: In(ids) },
    });

    const mapped = ids.map(
      (id) =>
        gamePlayers.filter(
          (gamePlayer: GamePlayer) => gamePlayer.ID_game === id,
        ) || null,
    );

    return await mapped;
  }

  async findGameForPlayer(id: number): Promise<GamePlayer[]> {
    return await this.gamePlayersRepository.find({ where: { ID_player: id } });
  }

  async findGamesDetails(ids: number[]): Promise<(Game | any)[]> {
    const games = await this.gamesRepository.find({
      where: { ID_game: In(ids) },
    });

    return await games;
  }
}
