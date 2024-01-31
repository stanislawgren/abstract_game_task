import { Module, forwardRef } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerResolver } from './player.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Players } from './player.entity';
import { TeamModule } from 'src/team/team.module';
import { PlayerGamesResolver } from './playerGames.resolver';
import { GameModule } from 'src/game/game.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Players]),
    forwardRef(() => TeamModule),
    GameModule,
  ],
  providers: [PlayerResolver, PlayerService, PlayerGamesResolver],
  exports: [PlayerService],
})
export class PlayerModule {}
