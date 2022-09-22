import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewModuleModule } from './modules/new-module/new-module.module';

@Module({
  imports: [NewModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
