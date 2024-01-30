import DataLoader from 'dataloader';
import { Player } from 'src/graphql';

export interface IDataloaders {
  playersLoader: DataLoader<number, Player>;
}
