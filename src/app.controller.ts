import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: any) {
    const BASE_URL = process.env.BASE_URL;
    res.redirect(`${BASE_URL}/api-docs`);
  }
}
