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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @ApiResponse({
    status: 404,
    description: '서버 에러',
  })
  @ApiOperation({ summary: '유저 리스트' })
  @Get('list')
  async findAll(): Promise<User[]> {
    const userList = await this.userService.findAll();
    return userList;
  }

  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @ApiResponse({
    status: 404,
    description: '서버 에러',
  })
  @ApiOperation({ summary: '특정 유저 확인' })
  @Get(':userId')
  async findOne(@Param('userId') userId: string): Promise<User> {
    const foundUser = await this.userService.findOne(userId);
    return foundUser;
  }

  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @ApiResponse({
    status: 404,
    description: '서버 에러',
  })
  @ApiOperation({ summary: '유저 생성' })
  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userService.createUser(createUserDto);
    return createdUser;
  }

  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @ApiResponse({
    status: 404,
    description: '서버 에러',
  })
  @ApiOperation({ summary: '유저 업데이트' })
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

  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @ApiResponse({
    status: 404,
    description: '서버 에러',
  })
  @ApiOperation({ summary: '유저 삭제' })
  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string): Promise<void> {
    await this.userService.deleteUser(userId);
  }
}
