import { Controller, Get,Post, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('user/query')
  queryUser(): string {
    return this.UserService.queryUser();
  }
  @Get('user/add')
  addUser(): string {
    return this.UserService.addUser();
  }
  @Get('user/edit')
  editUser(): string {
    return this.UserService.editUser();
  }
  @Get('user/del')
  delUser(): string {
    return this.UserService.delUser();
  }
}
