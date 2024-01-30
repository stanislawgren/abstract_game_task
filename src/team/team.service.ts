import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teams } from './team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Teams) private readonly teamRepository: Repository<Teams>,
  ) {}

  async findAll(): Promise<Teams[]> {
    return await this.teamRepository.find();
  }
}
