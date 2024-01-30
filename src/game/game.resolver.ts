import { Resolver } from '@nestjs/graphql';
import { GameService } from './game.service';

@Resolver('Game')
export class GameResolver {
  constructor(private readonly gameService: GameService) {}
}
