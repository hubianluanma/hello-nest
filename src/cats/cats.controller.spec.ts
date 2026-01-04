import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('AppController', () => {
  let catController: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catController = app.get<CatsController>(CatsController);
  });

  describe('root', () => {
    it('should be defined', () => {
        expect(catController).toBeDefined();
    });
  });
});
