import { Controller, Get, Post, Delete, Put } from '@nestjs/common';

@Controller('cantoras')
export class CantorasController {
  @Get()
  getCantoras() {
    return 'Todas as cantoras';
  }

  @Get('/:cantoraId')
  getCantoraById() {
    return 'Mostrando Cantora pelo ID';
  }

  @Post()
  criandoCantora() {
    return 'Cantora Criada';
  }

  @Delete('/:cantoraId')
  removendoCantora() {
    return 'Cantora Removida';
  }

  @Put('/:cantoraId')
  atualizandoCantora() {
    return 'Informações da Cantora Atualizadas';
  }
}
