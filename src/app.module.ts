import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    //* Envs configuration
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
    }),

    //* Mongo connection
    MongooseModule.forRoot(process.env.MONGO_DATABASE),

    //* Modules imported
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
