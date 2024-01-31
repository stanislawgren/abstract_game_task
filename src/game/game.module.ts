import { Module, forwardRef } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Games } from './game.entity';
import { GameParticipants } from './gameParticipants.entity';
import { GamePlayers } from './gamePlayers.entity';
import { GameParticipantsResolver } from './gameParticipants.resolver';
import { DataloaderModule } from 'src/dataloader/dataloader.module';
import { GamePlayersResolver } from './gamePlayer.resolver';
import { GamePlayerDetailsResolver } from './gamePlayerDetails.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Games]),
    TypeOrmModule.forFeature([GameParticipants]),
    TypeOrmModule.forFeature([GamePlayers]),
    forwardRef(() => DataloaderModule),
  ],
  providers: [
    GameResolver,
    GameService,
    GameParticipantsResolver,
    GamePlayersResolver,
    GamePlayerDetailsResolver,
  ],
  exports: [GameService],
})
export class GameModule {}
