import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminUserEntity } from './entity/adminUser.entity';
import { Repository } from 'typeorm';
import { CreateAdminUserDTO } from './dto/create-adminUser.dto';
import { BcryptUtil } from 'src/utils/bcrypt.util';

@Injectable()
export class AdminUserService {

    constructor(@InjectRepository(AdminUserEntity) private adminUserRepository: Repository<AdminUserEntity>) {}

    async createAdminUser(createAdminUser: CreateAdminUserDTO): Promise<void> {
        createAdminUser.password = await BcryptUtil.encodePassword(createAdminUser.password, 10);
        const adminUser = this.adminUserRepository.create(createAdminUser);
        this.adminUserRepository.save(adminUser);
    }
}