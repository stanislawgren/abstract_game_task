import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Games } from './game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Games])],
  providers: [GameResolver, GameService],
})
export class GameModule {}
