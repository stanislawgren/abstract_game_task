import DataLoader from 'dataloader';
import { GamePlayer, Player, TeamGame, GameDetails } from 'src/graphql';

export interface IDataloaders {
  playersLoader: DataLoader<number, Player>;
  teamsLoader: DataLoader<number, TeamGame>;
  gamePlayersLoader: DataLoader<number, GamePlayer[]>;
  gamePlayerDetailsLoader: DataLoader<number, Player>;
  gameDetailsLoader: DataLoader<number, GameDetails>;
}
