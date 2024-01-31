import { Module, forwardRef } from '@nestjs/common';
import { PlayerModule } from 'src/player/player.module';
import { DataloaderService } from './dataloader.service';
import { TeamModule } from 'src/team/team.module';
import { GameModule } from 'src/game/game.module';

@Module({
  imports: [
    PlayerModule,
    forwardRef(() => TeamModule),
    forwardRef(() => GameModule),
  ],
  providers: [DataloaderService],
  exports: [DataloaderService],
})
export class DataloaderModule {}
