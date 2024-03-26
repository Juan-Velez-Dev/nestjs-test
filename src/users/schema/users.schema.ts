import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop({ required: true, unique: true })
  id: string;
  @Prop({ maxlength: 20, unique: true })
  firstName: string;
  @Prop({ maxlength: 20 })
  lastName: string;
  @Prop({ required: false, unique: false })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  age: number;
  @Prop({ default: 'user', required: false })
  role: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
