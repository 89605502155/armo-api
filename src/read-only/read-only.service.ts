/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Param, Query } from '@nestjs/common';
import { WithFiltrationService } from './with-filtration/with-filtration.service';
import { WithoutFiltrationService } from './without-filtration/without-filtration.service';
import { Lead, ReadOnly } from './entities/read-only.entity';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ReadOnlyService {
  constructor(
    private readonly withFiltrationService: WithFiltrationService,
    private readonly WithoutFiltrationService: WithoutFiltrationService,
  ) {}
  findAll(query: string): Promise<Observable<Lead[]>> {
    let result: ReadOnly;
    if (query.length >= 3) {
      return this.withFiltrationService.findAll(query);
    } else {
      return this.WithoutFiltrationService.findAll();
    }
  }
}
