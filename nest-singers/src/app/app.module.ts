import { Module } from '@nestjs/common';
import { CantorasController } from '../cantoras/cantora.controller';
import { AlbunsController } from '../albuns/albuns.controller';
import { AlbunsCantorasController } from '../cantoras/albuns.cantoras.controller';

@Module({
  imports: [],
  controllers: [CantorasController, AlbunsController, AlbunsCantorasController],
})
export class AppModule {}
