import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { GamePlayer, Player } from 'src/graphql';
import { DataloaderService } from 'src/dataloader/dataloader.service';

@Resolver('GamePlayer')
export class GamePlayersResolver {
  constructor(private readonly dataLoaderService: DataloaderService) {}

  loaders = this.dataLoaderService.getLoaders();

  @ResolveField('player')
  async team(
    @Parent() gamePlayer: GamePlayer & { ID_player: number },
  ): Promise<Player> {
    return await this.loaders.gamePlayerDetailsLoader.load(
      gamePlayer.ID_player,
    );
  }
}
