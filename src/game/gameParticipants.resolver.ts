import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { GameParticipant, GamePlayer, TeamGame } from 'src/graphql';
import { DataloaderService } from 'src/dataloader/dataloader.service';

@Resolver('GameParticipant')
export class GameParticipantsResolver {
  constructor(private readonly dataLoaderService: DataloaderService) {}

  loaders = this.dataLoaderService.getLoaders();

  @ResolveField('team')
  async team(
    @Parent() gameParticipants: GameParticipant & { ID_team: number },
  ): Promise<TeamGame> {
    const teams = await this.loaders.teamsLoader.load(gameParticipants.ID_team);

    return await teams;
  }

  @ResolveField('players')
  async players(
    @Parent() gameParticipants: GameParticipant & { ID_game: number },
  ): Promise<GamePlayer[]> {
    const res = await this.loaders.gamePlayersLoader.load(
      gameParticipants.ID_game,
    );

    const teamPlayers = res.filter(
      (gamePlayer: GamePlayer) =>
        gamePlayer.ID_team === gameParticipants.ID_team,
    );

    return await teamPlayers;
  }
}
