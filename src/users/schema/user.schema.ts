import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  id: string;
  @Prop({ maxlength: 20, unique: true })
  firstName: string;
  @Prop({ maxlength: 20 })
  lastName: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: false })
  password: string;
  @Prop()
  age: number;
  @Prop({ default: 'user', required: false })
  role: string;
  @Prop({ default: false, required: false })
  active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
