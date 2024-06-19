import { Controller, Get, Param } from '@nestjs/common';
import { ReadOnlyService } from './read-only.service';

@Controller('api/leads')
export class ReadOnlyController {
  constructor(private readonly readOnlyService: ReadOnlyService) {}

  @Get(':query')
  findAll(@Param('query') query: string) {
    return this.readOnlyService.findAll(query);
  }
}
