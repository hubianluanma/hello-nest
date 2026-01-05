import { Body, Controller, Post } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { CreateAdminUserDTO } from './dto/create-adminUser.dto';

@Controller('adminUser')
export class AdminUserController {
    constructor(private readonly adminUserService: AdminUserService) {}

    @Post()
    async createAdminUser(@Body() createAdminUserDto: CreateAdminUserDTO): Promise<string> {
        await this.adminUserService.createAdminUser(createAdminUserDto);
        return '创建成功';
    }
}
