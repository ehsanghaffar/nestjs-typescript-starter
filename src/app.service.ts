import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, This is a starter for NestJs with Typescript ';
  }
}
