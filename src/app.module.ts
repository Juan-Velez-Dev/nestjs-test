import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

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
  ],
})
export class AppModule {}
