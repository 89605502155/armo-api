import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ReadOnly } from '../entities/read-only.entity';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';

@Injectable()
export class WithoutFiltrationService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async findAll() {
    const headers = {
      Authorization: 'Bearer ' + this.configService.get<string>('ACCESS_TOKEN'),
    };
    return this.httpService
      .get<ReadOnly>(this.configService.get<string>('HTTP_BASE_URL'), {
        headers,
      })
      .pipe(
        map((response: AxiosResponse<ReadOnly>) => response.data._embedded),
      );
  }
}
