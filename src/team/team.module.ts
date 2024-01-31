import { Module, forwardRef } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamResolver } from './team.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teams } from './team.entity';
import { DataloaderModule } from 'src/dataloader/dataloader.module';
import { PlayerModule } from 'src/player/player.module';
import { TeamGameResolver } from './teamGame.resolver';
import { GameModule } from 'src/game/game.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Teams]),
    forwardRef(() => DataloaderModule),
    forwardRef(() => PlayerModule),
    GameModule,
  ],
  providers: [TeamResolver, TeamService, TeamGameResolver],
  exports: [TeamService],
})
export class TeamModule {}
