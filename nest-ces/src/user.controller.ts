import { Controller, Get,Post, Param,Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post('api/user/query')
  queryUser(@Body() req): string {
    return this.UserService.queryUser(req);
  }
  @Get('api/user/add')
  addUser(): string {
    return this.UserService.addUser();
  }
  @Get('api/user/edit')
  editUser(): string {
    return this.UserService.editUser();
  }
  @Get('api/user/del')
  delUser(): string {
    return this.UserService.delUser();
  }
}
