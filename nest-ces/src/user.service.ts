import { Injectable } from '@nestjs/common';
const userData = require('./user.json');

@Injectable()
export class UserService {
  queryUser(req:any): string {
    const {pageSize = 10, pageNum = 1} = req;
    // console.log(pageSize*(pageNum-1),pageSize*pageNum)
    //分页
    const tableData= userData.slice(pageSize*(pageNum-1),pageSize*pageNum);
    const res={
      code:200,
      data: {
        tableData,
        tablePage:{
          total:userData.length,
          pageSize,
          pageNum
        }
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
