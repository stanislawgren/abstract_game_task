import { Args, Query, Resolver } from '@nestjs/graphql';
import { PlayerService } from './player.service';
import { Players } from './player.entity';

@Resolver('Player')
export class PlayerResolver {
  constructor(private readonly playerService: PlayerService) {}

  @Query('players')
  async getPlayers(): Promise<Players[]> {
    return await this.playerService.findAll();
  }

  @Query('player')
  async getPlayer(@Args('id') id: number): Promise<Players> {
    return await this.playerService.findOneById(id);
  }
}
