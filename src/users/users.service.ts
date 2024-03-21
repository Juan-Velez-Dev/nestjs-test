import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users, UsersDocument } from './schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { randomUUID } from 'crypto';

//* Company logic
@Injectable()
export class UsersService {
  //* Injecting the User model & asigned to the property user model in the constructor
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    createUserDto.id = randomUUID();
    return await this.usersModel.create(createUserDto);
  }

  async findAll() {
    return await this.usersModel.find();
  }

  async findOne(id: string) {
    return await this.usersModel.findOne({ id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.usersModel.findOneAndUpdate({ id: id }, updateUserDto, {
      new: true,
    });
  }
}
