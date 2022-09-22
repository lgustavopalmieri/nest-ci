import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NewModuleService } from './new-module.service';
import { CreateNewModuleDto } from './dto/create-new-module.dto';
import { UpdateNewModuleDto } from './dto/update-new-module.dto';

@Controller('new-module')
export class NewModuleController {
  constructor(private readonly newModuleService: NewModuleService) {}

  @Post()
  create(@Body() createNewModuleDto: CreateNewModuleDto) {
    return this.newModuleService.create(createNewModuleDto);
  }

  @Get()
  findAll() {
    return this.newModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newModuleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNewModuleDto: UpdateNewModuleDto,
  ) {
    return this.newModuleService.update(+id, updateNewModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newModuleService.remove(+id);
  }
}
