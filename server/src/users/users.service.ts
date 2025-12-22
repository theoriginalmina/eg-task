import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model, QueryFilter, UpdateQuery } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'bcryptjs';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(data: CreateUserDto) {
    try {
      await new this.userModel({
        ...data,
        password: await hash(data.password, 10),
      }).save();
    } catch {
      throw new ConflictException('Email already in use');
    }
  }

  async getUser(query: QueryFilter<User>) {
    const user = (await this.userModel.findOne(query))?.toObject();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async getUsers() {
    return this.userModel.find({});
  }

  async updateUser(query: QueryFilter<User>, data: UpdateQuery<User>) {
    return this.userModel.findOneAndUpdate(query, data);
  }
}
