import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/entities/task.entity';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'sqlite',
      database: 'database.sqlite',
      synchronize: true,
      logging: true,
      entities: [Task],
    }),
    TaskModule,
  ],
})
export class AppModule {}
