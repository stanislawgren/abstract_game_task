import { Query, Resolver } from '@nestjs/graphql';
import { TeamService } from './team.service';

@Resolver('Teams')
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  @Query('teams')
  async getTeams() {
    return await this.teamService.findAll();
  }
}
