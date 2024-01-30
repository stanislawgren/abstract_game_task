import { Resolver } from '@nestjs/graphql';
import { GameService } from './game.service';
import { Query } from '@nestjs/graphql';

@Resolver('Game')
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Query('games')
  async getGames(): Promise<any> {
    return await this.gameService.findAll();
  }
}
