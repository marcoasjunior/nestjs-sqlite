
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Base } from './base.entity'

@Injectable()
export class BaseService {
    
  constructor(@InjectRepository(Base) private baseRepository: Repository<Base>) {}

  findAll(): Promise<Base[]> {
    return this.baseRepository.find()
  }

  findOne(id: string): Promise<Base> {
    return this.baseRepository.findOne(id)
  }

  async remove(id: string): Promise<void> {
    await this.baseRepository.delete(id)
  }
}

