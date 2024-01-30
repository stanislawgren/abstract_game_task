import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { IDataloaders } from './dataloader.interface';
import { PlayerService } from 'src/player/player.service';
import { Player } from 'src/graphql';

@Injectable()
export class DataloaderService {
  constructor(private readonly playerService: PlayerService) {}

  getLoaders(): IDataloaders {
    const playersLoader = this._createFriendsLoader();
    return {
      playersLoader,
    };
  }

  private _createFriendsLoader() {
    return new DataLoader<number, Player>(
      async (keys: readonly number[]) =>
        await this.playerService.findManyById(keys as number[]),
    );
  }
}
