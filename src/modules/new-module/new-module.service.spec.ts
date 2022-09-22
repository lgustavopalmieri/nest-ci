import { Test, TestingModule } from '@nestjs/testing';
import { NewModuleService } from './new-module.service';

describe('NewModuleService', () => {
  let service: NewModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewModuleService],
    }).compile();

    service = module.get<NewModuleService>(NewModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
