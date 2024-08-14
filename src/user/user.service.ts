import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntyty } from './entities/user.entity';
import { hash } from 'bcrypt';
import { read } from 'fs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntyty)
        private readonly userRepository: Repository<UserEntyty>
    ) {}

    async createUser(createUserDto: CreateUserDto): Promise<UserEntyty> {

        const saltOrRounds = 10;

        const passwordHashed = await hash(createUserDto.password, saltOrRounds);

        return this.userRepository.save({
            ...createUserDto,
            typeUser: 1,
            password: passwordHashed,
        });
    }

    async getAllUsers(): Promise<UserEntyty[]> {
        return this.userRepository.find();
    }
}