import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    // 注入 UserEntity 的仓库
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

    async findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    async findById(id: string): Promise<UserEntity | null> {
        return this.userRepository.findOneBy({ id });
    }

    async findByNickname(nickname: string): Promise<UserEntity | null> {
        return this.userRepository.findOneBy({ nickname });
    }
}
