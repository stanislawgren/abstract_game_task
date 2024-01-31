import { Resolver, ResolveField, Parent, Args } from '@nestjs/graphql';
import { GameService } from './game.service';
import { Query } from '@nestjs/graphql';
import { GameParticipant, GamePlayer, Game } from 'src/graphql';

@Resolver('Game')
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Query('games')
  async getGames(): Promise<(Game | any)[]> {
    return await this.gameService.findAllGames();
  }

  @Query('game_participants')
  async getGame(): Promise<GameParticipant[]> {
    return await this.gameService.findAllGameParticipants();
  }

  @Query('game_players')
  async getGamePlayers(): Promise<GamePlayer[]> {
    return await this.gameService.findAllGamePlayers();
  }

  @Query('game')
  async getGameById(@Args('id') id: number): Promise<Game> {
    return await this.gameService.findOneGameById(id);
  }

  @ResolveField('game_teams')
  async game_team(
    @Parent() game: Game & { ID_game: number },
  ): Promise<GameParticipant[]> {
    return await this.gameService.findGameParticipantsByGameId(game.ID_game);
  }
}
