import { Module } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { AdminUserController } from './admin-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUserEntity } from './entity/adminUser.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminUserEntity])
  ],
  providers: [AdminUserService],
  controllers: [AdminUserController],
  exports: [AdminUserService],
})
export class AdminUserModule {}
