import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { UsersSchema } from 'src/users/schema/users.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstanst } from './jwt.constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UsersSchema,
      },
    ]),
    JwtModule.register({
      secret: jwtConstanst.secret,
    }),
  ],
  controllers: [AuthController],
  //! indicar al modulo que se esta haciendo uso de la JWT strategy
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
