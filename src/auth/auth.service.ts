import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { Model } from 'mongoose';
import { UsersDocument } from 'src/users/schema/users.schema';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UsersDocument>,
    private jwtService: JwtService,
  ) {}

  async register(registerAuthDto: RegisterAuthDto) {
    const { password } = registerAuthDto;
    const plainToHash = await hash(password, 10);
    registerAuthDto = { ...registerAuthDto, password: plainToHash };
    registerAuthDto.id = randomUUID();
    return this.userModel.create(registerAuthDto);
  }

  async login(loginAuthDto: LoginAuthDto) {
    const { email, password } = loginAuthDto;
    const findUser = await this.userModel.findOne({ email });
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await compare(password, findUser.password);
    if (!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403);

    const payload = { id: findUser.id, name: findUser.firstName };
    const token = await this.jwtService.sign(payload);
    const data = {
      user: findUser,
      token,
    };
    return data;
  }
}
