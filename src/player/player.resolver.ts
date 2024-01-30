import { Query, Resolver } from '@nestjs/graphql';
import { PlayerService } from './player.service';

@Resolver('Player')
export class PlayerResolver {
  constructor(private readonly playerService: PlayerService) {}

  @Query('players')
  async getPlayers() {
    return await this.playerService.findAll();
  }
}
