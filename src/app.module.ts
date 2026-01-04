import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // 数据库主机
      port: 3306, // 数据库端口
      username: 'root', // 数据库用户名
      password: 'huhailong', // 数据库密码
      database: 'mood_recorder', // 数据库名称
      entities: [UserEntity], // 引入实体类
      synchronize: true, // 仅在开发环境使用，生产环境不推荐
    }),
    CatsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
