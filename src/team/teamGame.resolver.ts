import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { DataloaderService } from 'src/dataloader/dataloader.service';
import { GamePlayer, TeamGame } from 'src/graphql';

@Resolver('TeamGame')
export class TeamGameResolver {
  constructor(private readonly dataLoaderService: DataloaderService) {}

  loaders = this.dataLoaderService.getLoaders();

  @ResolveField('players')
  async players(
    @Parent() team: TeamGame & { ID_team: number },
  ): Promise<GamePlayer> {
    const res = await this.loaders.gamePlayersLoader.load(team.ID_team);

    return res[0];
  }
}
