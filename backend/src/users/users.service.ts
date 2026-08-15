import { Injectable, HttpException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async create(data: CreateUserDto) {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: data.email }, { cpf: data.cpf }],
      },
    });

    if (existingUser) {
      if (existingUser.email === data.email) {
        throw new HttpException('Email already exist.', 409);
      }

      if (existingUser.cpf === data.cpf) {
        throw new HttpException('CPF already exist.', 409);
      }
    }

    return this.prisma.user.create({
      data,
    });
  }
}
