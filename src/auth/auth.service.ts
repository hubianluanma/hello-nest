import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminUserService } from 'src/admin-user/admin-user.service';
import { BcryptUtil } from 'src/utils/bcrypt.util';

@Injectable()
export class AuthService {
    constructor(
        private readonly adminUserService: AdminUserService,
        private readonly jwtService: JwtService
    ) {}

    async validateAdminUser(username: string, password: string): Promise<any> {
        const adminUser = await this.adminUserService.findByUsername(username);
        if (adminUser && await BcryptUtil.comparePassword(password, adminUser.password)) {
            const { password, ...result } = adminUser;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const palyod = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(palyod),
        }
    }
}
