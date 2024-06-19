import { Module } from '@nestjs/common';
import { ReadOnlyService } from './read-only.service';
import { ReadOnlyController } from './read-only.controller';
import { WithoutFiltrationService } from './without-filtration/without-filtration.service';
import { WithFiltrationService } from './with-filtration/with-filtration.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      ],
      useFactory: async (configService: ConfigService) => ({
        timeout: configService.get('HTTP_TIMEOUT'),
        maxRedirects: configService.get('HTTP_MAX_REDIRECTS'),
        baseURL: configService.get('HTTP_BASE_URL'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ReadOnlyController],
  providers: [ReadOnlyService, WithoutFiltrationService, WithFiltrationService],
})
export class ReadOnlyModule {}
