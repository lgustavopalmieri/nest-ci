import { PartialType } from '@nestjs/mapped-types';
import { CreateNewModuleDto } from './create-new-module.dto';

export class UpdateNewModuleDto extends PartialType(CreateNewModuleDto) {}
