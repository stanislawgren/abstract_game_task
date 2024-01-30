import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teams } from './team.entity';
import { Team } from 'src/graphql';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Teams) private readonly teamRepository: Repository<Team>,
  ) {}

  async findAll(): Promise<Team[]> {
    return await this.teamRepository.find();
  }

  async findOneById(id: number): Promise<Team> {
    return await this.teamRepository.findOne({ where: { ID_team: id } });
  }
}
