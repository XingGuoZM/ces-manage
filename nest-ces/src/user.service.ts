import { Injectable } from '@nestjs/common';
import _ from 'lodash';
const userData = require('./user.json');
const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

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
  async addUser(req:any): Promise<string> {
    // const {id,name,age,sex,interst} = req;
    const filepath = path.join(__dirname,'user.json');
    const ansBuf = await fs.readFileSync(filepath);

    const ans = JSON.parse(ansBuf);

    const data={
      ...req,
      id:+new Date(),
      created_at:dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
    ans.push(data);

    fs.writeFileSync(filepath,JSON.stringify(ans));

    return JSON.stringify({
      code:200,
      msg:'添加成功',
      data
    });
  }
  editUser(): string {
    return 'User Edit';
  }
  delUser(): string {
    return 'User Del';
  }
}
