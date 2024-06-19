import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ReadOnly } from '../entities/read-only.entity';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';

@Injectable()
export class WithFiltrationService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async findAll(query: string) {
    const headers = {
      Authorization: 'Bearer ' + this.configService.get<string>('ACCESS_TOKEN'),
    };
    return this.httpService
      .get<ReadOnly>(
        this.configService.get<string>('HTTP_BASE_URL') + '&' + query,
        { headers },
      )
      .pipe(
        map((response: AxiosResponse<ReadOnly>) => response.data._embedded),
      );
  }
}
