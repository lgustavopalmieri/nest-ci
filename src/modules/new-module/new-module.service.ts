import { Injectable } from '@nestjs/common';
import { CreateNewModuleDto } from './dto/create-new-module.dto';
import { UpdateNewModuleDto } from './dto/update-new-module.dto';

@Injectable()
export class NewModuleService {
  create(createNewModuleDto: CreateNewModuleDto) {
    return 'This action adds a new newModule';
  }

  findAll() {
    return `This action returns all newModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newModule`;
  }

  update(id: number, updateNewModuleDto: UpdateNewModuleDto) {
    return `This action updates a #${id} newModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} newModule`;
  }

  create5(createNewModuleDto: CreateNewModuleDto) {
    return 'This action adds a new newModule';
  }

  findAll4() {
    return `This action returns all newModule`;
  }

  findOne3(id: number) {
    return `This action returns a #${id} newModule`;
  }

  update2(id: number, updateNewModuleDto: UpdateNewModuleDto) {
    return `This action updates a #${id} newModule`;
  }

  remove1(id: number) {
    return `This action removes a #${id} newModule`;
  }
}
