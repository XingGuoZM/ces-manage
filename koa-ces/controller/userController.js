const UserModel =require('../model/user')
// 使用mock数据，操作mock/user.json文件
const user=require('../mock/user.json')

class UserController{
    static async query(ctx){
        ctx.body={code:200,msg:'查询成功',data:user}
    }
    static async add(ctx){
        let obj=ctx.request.body
        obj.interst=obj.interst.join()
        obj.id=new Date().getTime()
        // let info = await UserModel.add(ctx.request.body)
        ctx.body={code:200,msg:'新增成功'}
    }
    static async edit(ctx){
        let obj=ctx.request.body
        obj.interst=obj.interst.join()
        // let info = await UserModel.edit(obj)
        ctx.body={code:200,msg:'编辑成功'}
    }
    static async del(ctx){
        // let info = await UserModel.del(ctx.request.body)
        ctx.body={code:200,msg:'删除成功'}
    }
}
module.exports= UserController