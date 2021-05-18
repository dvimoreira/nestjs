import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaController } from './categoria/categoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '45.82.75.219',
      port: 49153,
      username: 'root',
      password: 'sqlsenha',
      database: 'teste_mysql',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, CategoriaController],
  providers: [AppService],
})
export class AppModule {}
