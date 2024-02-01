import { Args, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { PlayerService } from './player.service';
import { Player, Team } from 'src/graphql';
import { TeamService } from 'src/team/team.service';

@Resolver('Player')
export class PlayerResolver {
  constructor(
    private readonly playerService: PlayerService,
    private readonly teamService: TeamService,
  ) {}

  @Query('players')
  async getPlayers(): Promise<Player[]> {
    return await this.playerService.findAll();
  }

  @Query('player')
  async getPlayer(@Args('id') id: number): Promise<Player> {
    return await this.playerService.findOneById(id);
  }

  @ResolveField('team')
  async team(@Parent() player: Player & { ID_team: number }): Promise<Team> {
    return await this.teamService.findOneById(player.ID_team);
  }
}
