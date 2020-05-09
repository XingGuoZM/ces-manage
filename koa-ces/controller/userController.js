const UserModel =require('../model/user')
const user=require('../mock/user.json')
class UserController{
    static async query(ctx){
        // let info =await UserModel.query(ctx.request.body)
        console.log(1111)
        ctx.body={code:200,msg:'查询成功',data:user}
    }
    static async add(ctx){
        let obj=ctx.request.body
        obj.interst=obj.interst.join()
        obj.id=new Date().getTime()
        let info = await UserModel.add(ctx.request.body)
        ctx.body=info
    }
    static async edit(ctx){
        let obj=ctx.request.body
        obj.interst=obj.interst.join()
        let info = await UserModel.edit(obj)
        ctx.body=info
    }
    static async del(ctx){
        let info = await UserModel.del(ctx.request.body)
        ctx.body=info
    }
}
module.exports= UserController