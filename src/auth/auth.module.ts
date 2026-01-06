import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminUserModule } from 'src/admin-user/admin-user.module';

@Module({
  imports: [AdminUserModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
