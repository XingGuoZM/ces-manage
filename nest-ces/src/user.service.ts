import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  queryUser(): string {
    return 'User Query';
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
