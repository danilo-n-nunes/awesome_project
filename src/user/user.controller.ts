import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntyty } from './entities/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUsers(): Promise<UserEntyty[]> {
        return this.userService.getAllUsers();
    }
    
    @Post()
    async createUser( @Body() createUser: CreateUserDto): Promise<UserEntyty> {
        return this.userService.createUser(createUser);
    }
}
