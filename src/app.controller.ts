import { Controller, Get } from '@nestjs/common';
import { User } from './auth/auth.decorator';
import { Db } from 'mongodb';

@Controller()
export class AppController {
  constructor(private readonly db: Db) {}

  @Get()
  async getHello(@User() user: string): Promise<any> {
    return {
      hello: user,
    };
  }
}
