import { Query, Resolver, Args, ResolveField, Parent } from '@nestjs/graphql';
import { TeamService } from './team.service';
import { DataloaderService } from 'src/dataloader/dataloader.service';
import { TeamPlayers, Player } from 'src/graphql';

@Resolver('TeamPlayers')
export class TeamResolver {
  constructor(
    private readonly teamService: TeamService,
    private readonly dataLoaderService: DataloaderService,
  ) {}

  loaders = this.dataLoaderService.getLoaders();

  @Query('teams')
  async getTeams(): Promise<TeamPlayers[]> {
    return await this.teamService.findAll();
  }

  @Query('team')
  async getTeam(@Args('id') id: number): Promise<TeamPlayers> {
    return await this.teamService.findOneById(id);
  }

  @ResolveField('players')
  async players(
    @Parent() team: TeamPlayers & { ID_team: number },
  ): Promise<Player> {
    const res = await this.loaders.playersLoader.load(team.ID_team);

    return res;
  }
}
