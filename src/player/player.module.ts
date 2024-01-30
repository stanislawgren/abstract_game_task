import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerResolver } from './player.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Players } from './player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Players])],
  providers: [PlayerResolver, PlayerService],
  exports: [PlayerService],
})
export class PlayerModule {}
