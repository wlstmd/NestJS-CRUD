export class CreateUserDto {
  userId: string;
  username: string;
  userPassword: string;
  age: number;
  isActive?: boolean;
}

export class UpdateUserDto {
  username?: string;
  userPassword?: string;
  age?: number;
  isActive?: boolean;
}
