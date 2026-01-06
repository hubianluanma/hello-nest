import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('validateAdminUser')
    validateAdminUser(@Body() loginData: { username: string, password: string }): Promise<any> {
        return this.authService.validateAdminUser(loginData.username, loginData.password);
    }
}
