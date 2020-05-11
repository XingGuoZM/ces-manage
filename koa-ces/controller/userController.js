// const UserModel =require('../model/user')
// 使用mock数据，操作mock/user.json文件
const fs=require('fs')

class UserController{
    static query(ctx){
        const source=fs.readFileSync(__dirname+'/user.json');
        let src=JSON.parse(source)
        let {name,age,pageNum,pageSize}=ctx.request.body
        if(name){
            src=src.filter(item=>item===name);
        }
        if(age){
            src=src.filter(item=>item.age===age)
        }
        if(pageSize || pageNum) {
            if(!pageNum) pageNum=1;
            src=src.slice((pageNum-1)*pageSize,pageNum*pageSize)
        }

        ctx.body={code:200,msg:'查询成功',data:src}
    }
    static add(ctx){
        let obj=ctx.request.body
        obj.id=new Date().getTime()
        const source=fs.readFileSync(__dirname+'/user.json');
        const src=JSON.parse(source);
        src.push(obj)
        fs.writeFileSync(__dirname+'/user.json',JSON.stringify(src))
        ctx.body={code:200,msg:'新增成功'}
    }
    static edit(ctx){
        let {id,name,age,interst}=ctx.request.body
        const source=fs.readFileSync(__dirname+'/user.json');
        let src=JSON.parse(source);
        for(let item of src){
            if(item.id===id){
                if(item.name) item.name=name;
                if(item.age) item.age=age;
                if(item.interst) item.interst=interst;
            }
        }
        fs.writeFileSync(__dirname+'/user.json',JSON.stringify(src))
        ctx.body={code:200,msg:'编辑成功'}
    }
    static del(ctx){
        let { id }=ctx.request.body
        const source=fs.readFileSync(__dirname+'/user.json');
        let src=JSON.parse(source);
        for(let i=0;i<src.length;i++){
            if(src[i].id===id){
                src.splice(i,1);
                break;
            }
        }

        fs.writeFileSync(__dirname+'/user.json',JSON.stringify(src))
        ctx.body={code:200,msg:'删除成功'}
    }
}
module.exports= UserController