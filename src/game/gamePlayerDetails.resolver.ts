import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { PlayerGames, TeamGame, GameDetails } from 'src/graphql';
import { DataloaderService } from 'src/dataloader/dataloader.service';

@Resolver('GamePlayerDetails')
export class GamePlayerDetailsResolver {
  constructor(private readonly dataLoaderService: DataloaderService) {}

  loaders = this.dataLoaderService.getLoaders();

  @ResolveField('team')
  async team(
    @Parent() playerGames: PlayerGames & { ID_team: number },
  ): Promise<TeamGame> {
    const chk = await this.loaders.teamsLoader.load(playerGames.ID_team);

    return await chk;
  }

  @ResolveField('game')
  async game(
    @Parent() playerGames: PlayerGames & { ID_game: number },
  ): Promise<GameDetails | any> {
    const chk = await this.loaders.gameDetailsLoader.load(playerGames.ID_game);

    return await chk;
  }
}
