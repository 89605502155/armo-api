import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReadOnlyModule } from './read-only/read-only.module';

@Module({
  imports: [ReadOnlyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
