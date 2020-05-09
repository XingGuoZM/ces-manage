'use strict';
const db = require('../config/db')
const models={
    query:async data=>{
        let size=data.pageSize
        let num=data.pageNum
        let res =await db(`select * from user limit 
            ${(num-1)*size},${size}`)
        let total = await db(`select * from user`)
        if(res.length>0){
            res.map(item=>{
                item.interst=item.interst.split(',')
                return item
            })
        }
        return {data:res,pageSize:size,pageNum:num,total:total.length,msg:'查询成功',code:200}
    },
    add: async data => {
        let res=await db(`insert into user (id,name,age,sex,interst) values ('${data.id}','${data.name}','${data.age}','${data.sex}','${data.interst}')`)
        return {msg:'新增成功',code:200}
    },
    del:async data => {
        let res = await db(`delete from user where id = '${data.id}'`)
        return {msg:'编辑成功',code:200}
    },
    edit: async data => {
        let res = await db(`update user set name='${data.name}',age='${data.age}',sex='${data.sex}',interst='${data.interst}' where id='${data.id}'`)
        return {msg:'删除成功',code:200}
    }
}
module.exports=models