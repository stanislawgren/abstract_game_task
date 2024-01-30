import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamResolver } from './team.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teams } from './team.entity';
import { PlayerModule } from 'src/player/player.module';
import { DataloaderModule } from 'src/dataloader/dataloader.module';

@Module({
  imports: [TypeOrmModule.forFeature([Teams]), PlayerModule, DataloaderModule],
  providers: [TeamResolver, TeamService],
})
export class TeamModule {}
