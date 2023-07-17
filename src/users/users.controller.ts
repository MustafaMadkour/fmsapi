import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('signup')
  async signUp(@Body() body: { username: string; password: string }) {
    return await this.userService.create(body.username, body.password);
  }

  @Post('signin')
  async signIn(@Body() body: { username: string; password: string }) {
    return await this.userService.signIn(body.username, body.password);
  }
}
