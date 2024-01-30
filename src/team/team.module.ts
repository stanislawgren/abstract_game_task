import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamResolver } from './team.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teams } from './team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teams])],
  providers: [TeamResolver, TeamService],
})
export class TeamModule {}
