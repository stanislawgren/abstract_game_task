import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { IDataloaders } from './dataloader.interface';
import { PlayerService } from 'src/player/player.service';
import { GameDetails, GamePlayer, Player, TeamGame } from 'src/graphql';
import { TeamService } from 'src/team/team.service';
import { GameService } from 'src/game/game.service';

@Injectable()
export class DataloaderService {
  constructor(
    private readonly playerService: PlayerService,
    private readonly teamService: TeamService,
    private readonly gameService: GameService,
  ) {}

  getLoaders(): IDataloaders {
    const playersLoader = this._createPlayersLoader();
    const teamsLoader = this._createTeamsLoader();
    const gamePlayersLoader = this._createGamePlayersLoader();
    const gamePlayerDetailsLoader = this._createPlayersByIdLoader();
    const gameDetailsLoader = this._createGameDetailsLoader();
    return {
      playersLoader,
      teamsLoader,
      gamePlayersLoader,
      gamePlayerDetailsLoader,
      gameDetailsLoader,
    };
  }

  private _createPlayersLoader() {
    return new DataLoader<number, Player>(
      async (keys: readonly number[]) =>
        await this.playerService.findManyByTeamId(keys as number[]),
    );
  }

  private _createPlayersByIdLoader() {
    return new DataLoader<number, Player>(
      async (keys: readonly number[]) =>
        await this.playerService.findManyByPlayerId(keys as number[]),
    );
  }

  private _createTeamsLoader() {
    return new DataLoader<number, TeamGame>(
      async (keys: readonly number[]) =>
        await this.teamService.findManyById(keys as number[]),
    );
  }

  private _createGamePlayersLoader() {
    return new DataLoader<number, GamePlayer[]>(
      async (keys: readonly number[]) =>
        await this.gameService.findGamePlayersForGame(keys as number[]),
    );
  }

  private _createGameDetailsLoader() {
    return new DataLoader<number, GameDetails>(
      async (keys: readonly number[]) =>
        await this.gameService.findGamesDetails(keys as number[]),
    );
  }
}
