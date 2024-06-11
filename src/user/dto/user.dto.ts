import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    example: 'wlstmd',
    description: 'userId',
  })
  userId: string;

  @ApiProperty({
    required: true,
    example: 'wlstmd',
    description: '이름',
  })
  username: string;

  @ApiProperty({
    required: true,
    example: 'password123',
    description: '비밀번호',
  })
  userPassword: string;

  @ApiProperty({
    required: true,
    example: 18,
    description: '나이',
  })
  age: number;

  @ApiProperty({
    required: false,
  })
  isActive?: boolean;
}

export class UpdateUserDto {
  @ApiProperty({
    required: false,
    example: 'wlstmd',
    description: '이름',
  })
  username?: string;

  @ApiProperty({
    required: false,
    example: 'password123',
    description: '비밀번호',
  })
  userPassword?: string;

  @ApiProperty({
    required: false,
    example: 18,
    description: '나이',
  })
  age?: number;

  @ApiProperty({
    required: false,
  })
  isActive?: boolean;
}
