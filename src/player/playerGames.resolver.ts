import { Args, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { PlayerService } from './player.service';
import { GamePlayer, PlayerGames } from 'src/graphql';
import { GameService } from 'src/game/game.service';

@Resolver('PlayerGames')
export class PlayerGamesResolver {
  constructor(
    private readonly playerService: PlayerService,
    private readonly gameService: GameService,
  ) {}

  @Query('player_games')
  async getPlayer(@Args('id') id: number): Promise<any> {
    return await this.playerService.findOneById(id);
  }

  @ResolveField('games')
  async games(
    @Parent() player: PlayerGames & { ID_player: number },
  ): Promise<GamePlayer[]> {
    return await this.gameService.findGameForPlayer(player.ID_player);
  }
}
