import { Injectable } from '@nestjs/common';
const userData = require('./user.json');

@Injectable()
export class UserService {
  queryUser(): string {
    const res={
      code:200,
      data: {
        tableData:userData
      }
    }
    return JSON.stringify(res);
  }
  addUser(): string {
    return 'User Add';
  }
  editUser(): string {
    return 'User Edit';
  }
  delUser(): string {
    return 'User Del';
  }
}
