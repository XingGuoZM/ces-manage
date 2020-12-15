import { Injectable } from '@nestjs/common';
import _ from 'lodash';
const userData = require('./user.json');
const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');


@Injectable()
export class UserService {
  // 查询
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
  // 添加
  async addUser(req:any): Promise<string> {
    // const {id,name,age,sex,interst} = req;
    const filepath = path.join(__dirname,'user.json');
    const ansBuf = await fs.readFileSync(filepath);

    const ans = JSON.parse(ansBuf);

    const data={
      ...req,
      id:+new Date(),
      memberId:null,
      created_at:dayjs().format('YYYY-MM-DD HH:mm:ss'),
      updated_at:dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
    ans.push(data);

    fs.writeFileSync(filepath,JSON.stringify(ans));

    return JSON.stringify({
      code:200,
      msg:'添加成功',
      data
    });
  }
  // 修改
  async editUser(req:any): Promise<string> {
    const {id, name, age, sex, interst, created_at} = req;
    const filepath = path.join(__dirname,'user.json');
    const ansBuf = await fs.readFileSync(filepath);
    let ans = JSON.parse(ansBuf);
    ans = ans.map(item=>{

      return item.id==id ? {
        id,
        name: name || item.name,
        age: age || item.age,
        sex: sex || item.sex,
        interst: interst || item.interst,
        created_at: created_at || item.created_at,
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      } : item;

    });
    fs.writeFileSync(filepath,JSON.stringify(ans));

    return JSON.stringify({
      code:200,
      msg:'编辑成功',
      ans
    });

  }
  // 根据id删除
  async delUser(req:any): Promise<string> {
    const { id } = req;
    const filepath = path.join(__dirname,'user.json');
    const ansBuf = await fs.readFileSync(filepath);
    let ans = JSON.parse(ansBuf);
    let len=ans.length
    for(let i = 0; i < len; i++){
      if(id == ans[i].id) {
        ans.splice(i,1);
        break;
      }
    }
    fs.writeFileSync(filepath,JSON.stringify(ans));

    const SUCCESS_STR=JSON.stringify({
      code:200,
      msg:'删除成功',
    })
    const FAIL_STR=JSON.stringify({
      code:400,
      msg:'删除失败',
    })
    return ans.length === len ? FAIL_STR : SUCCESS_STR;
  }
}
