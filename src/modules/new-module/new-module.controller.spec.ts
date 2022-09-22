import { Test, TestingModule } from '@nestjs/testing';
import { NewModuleController } from './new-module.controller';
import { NewModuleService } from './new-module.service';

describe('NewModuleController', () => {
  let controller: NewModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewModuleController],
      providers: [NewModuleService],
    }).compile();

    controller = module.get<NewModuleController>(NewModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
