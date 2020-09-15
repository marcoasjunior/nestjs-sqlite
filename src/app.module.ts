import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseModule } from './base/base.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
 }), BaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
