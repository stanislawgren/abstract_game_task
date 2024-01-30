import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Players } from './player.entity';
import { In, Repository } from 'typeorm';
import { Player } from 'src/graphql';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Players)
    private readonly playersRepository: Repository<Player>,
  ) {}

  async findAll(): Promise<Player[]> {
    return await this.playersRepository.find();
  }

  async findOneById(id: number): Promise<Player> {
    return await this.playersRepository.findOneBy({ ID_player: id });
  }

  async findManyById(ids: number[]): Promise<(Player | any)[]> {
    const players = await this.playersRepository.find({
      where: { ID_team: In(ids) },
    });

    const mapped = ids.map(
      (id) => players.filter((player: Player) => player.ID_team === id) || null,
    );

    return await mapped;
  }
}
