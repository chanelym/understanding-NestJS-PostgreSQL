import { Controller, Get } from '@nestjs/common';

@Controller('albuns')
export class AlbunsController {
  @Get()
  getAlbuns() {
    return 'Todos os Álbuns';
  }

  @Get('/:albumId')
  getAlbumById() {
    return 'Mostrando Album pelo ID';
  }
}
