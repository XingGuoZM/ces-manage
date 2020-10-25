import { Controller, Get,Post, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('api/user/query')
  queryUser(): string {
    return this.UserService.queryUser();
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
