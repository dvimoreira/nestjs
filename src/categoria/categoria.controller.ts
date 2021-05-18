import { Controller, Get } from '@nestjs/common';

@Controller('categoria')
export class CategoriaController {
    @Get()
    getCategories(): string {
        return 'Get aqui';
    }
}
