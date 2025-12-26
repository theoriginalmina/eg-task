import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from './schema/user.schema';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    await this.usersService.create(body);
  }

  // TODO: Delete this
  @Get()
  @UseGuards(JwtAuthGuard)
  getUser(@CurrentUser() user: User) {
    const { email, name, updatedAt } = user;
    return { email, name, updatedAt };
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  async updateUser(@CurrentUser() user: User, @Body() body: UpdateUserDto) {
    const { name, email } = body;
    await this.usersService.updateUser(
      { _id: user._id },
      {
        $set: {
          name,
          email,
        },
      },
    );
  }
}
