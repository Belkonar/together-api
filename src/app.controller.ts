import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './auth/auth.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@User() user: string): string {
    return user;
  }
}
