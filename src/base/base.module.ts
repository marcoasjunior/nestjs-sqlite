import { Module } from '@nestjs/common';
import { BaseController } from './base.controller';
import { BaseService } from './base.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Base } from './base.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Base]),
    ],
    controllers: [BaseController],
    providers: [BaseService]
})
export class BaseModule {}
