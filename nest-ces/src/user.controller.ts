import { Controller, Get,Post, Param,Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post('api/user/query')
  queryUser(@Body() req): string {
    return this.UserService.queryUser(req);
  }
  @Post('api/user/add')
  async addUser(@Body() req): Promise<string> {
    return await this.UserService.addUser(req);
  }
  @Post('api/user/edit')
  async editUser(@Body() req): Promise<string> {
    return await this.UserService.editUser(req);
  }
  @Post('api/user/del')
  async delUser(@Body() req): Promise<string> {
    return await this.UserService.delUser(req);
  }
}
