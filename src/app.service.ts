import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo() {
    return {
      name: 'nestjs-template',
      status: 'ok',
    };
  }
}
