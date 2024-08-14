import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntyty } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntyty])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
