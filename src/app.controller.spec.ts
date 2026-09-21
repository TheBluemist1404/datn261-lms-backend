import { Test } from '@nestjs/testing';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = moduleRef.get(AppController);
  });

  it('returns application info', () => {
    expect(controller.getInfo()).toEqual({
      name: 'nestjs-template',
      status: 'ok',
    });
  });
});
