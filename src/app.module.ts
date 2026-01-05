import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { databaseConfig } from './database.config';
import { AdminUserModule } from './admin-user/admin-user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    CatsModule, UserModule, AuthModule, AdminUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
