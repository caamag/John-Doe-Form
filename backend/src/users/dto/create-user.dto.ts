import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  cpf!: string;

  @IsNotEmpty()
  observations!: string;

  @IsNotEmpty()
  favoriteColor!: string;
}
