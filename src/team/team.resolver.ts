import { Query, Resolver, ResolveField, Parent, Args } from '@nestjs/graphql';
import { TeamService } from './team.service';
import { Teams } from './team.entity';
import { PlayerService } from 'src/player/player.service';
import { Player, Team } from 'src/graphql';
import { DataloaderService } from 'src/dataloader/dataloader.service';

@Resolver('Team')
export class TeamResolver {
  constructor(
    private readonly teamService: TeamService,
    private readonly playerService: PlayerService,
    private readonly dataLoaderService: DataloaderService,
  ) {}

  loaders = this.dataLoaderService.getLoaders();

  @Query('teams')
  async getTeams(): Promise<Teams[]> {
    return await this.teamService.findAll();
  }

  @Query('team')
  async getTeam(@Args('id') id: number): Promise<Team> {
    return await this.teamService.findOneById(id);
  }

  @ResolveField('players')
  async players(@Parent() team: Team & { ID_team: number }): Promise<Player> {
    return await this.loaders.playersLoader.load(team.ID_team);
  }
}
