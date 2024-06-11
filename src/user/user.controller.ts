import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './entity/user-entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('list')
  async findAll(): Promise<User[]> {
    const userList = await this.userService.findAll();
    return userList;
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: string): Promise<User> {
    const foundUser = await this.userService.findOne(userId);
    return foundUser;
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userService.createUser(createUserDto);
    return createdUser;
  }

  @Put(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const updatedUser = await this.userService.updateUser(
      userId,
      updateUserDto,
    );
    return updatedUser;
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string): Promise<void> {
    await this.userService.deleteUser(userId);
  }
}
