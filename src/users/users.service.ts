import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(username: string, password: string) {
    const user = new this.userModel({ username, password });
    return await user.save();
  }

  async signIn(username: string, password: string) {
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new Error('User not found');
    }
    if (user.password !== password) {
      throw new Error('Invalid password');
    }
    return user;
  }
}