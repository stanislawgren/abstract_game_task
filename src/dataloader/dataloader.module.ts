import { Module } from '@nestjs/common';
import { PlayerModule } from 'src/player/player.module';
import { DataloaderService } from './dataloader.service';

@Module({
  imports: [PlayerModule],
  providers: [DataloaderService],
  exports: [DataloaderService],
})
export class DataloaderModule {}
