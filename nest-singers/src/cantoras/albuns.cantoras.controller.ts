import { Controller, Get, Put } from '@nestjs/common';

@Controller('albuns/:albumId/cantoras') // Dizendo ao Decorator a Rota pela qual receberá as requisições
export class AlbunsCantorasController {
  @Get()
  getCantoras() {
    return 'Retornando todos os álbuns que pertence à cantora';
  }

  @Put('/:cantoraId')
  atualizandoAlbumCantora() {
    return 'Atualizando o álbum que pertence à cantora';
  }
}
