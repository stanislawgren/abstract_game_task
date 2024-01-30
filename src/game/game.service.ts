import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Games } from './game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Games)
    private readonly gamesRepository: Repository<Games>,
  ) {}

  async findAll(): Promise<Games[]> {
    return await this.gamesRepository.find();
  }
}
