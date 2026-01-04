import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import { databaseConfig } from '../database.config';

describe('UserController', () => {
  let controller: UserController;
  let userSerivce: UserService;
  let dataSource: DataSource;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(databaseConfig),
        TypeOrmModule.forFeature([UserEntity])
      ],
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useClass: Repository,
        }
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    userSerivce = module.get<UserService>(UserService);
    dataSource = module.get(DataSource);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  afterAll(async () => {
    // 关闭数据库连接
    await dataSource.destroy();
  });
});
