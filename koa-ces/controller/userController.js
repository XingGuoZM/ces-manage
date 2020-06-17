const fs=require('fs')
const path=require('path')
const Excel = require('exceljs')
const formatDate = require('../util/formatDate')

class UserController{
    query(ctx){
        const source=fs.readFileSync(__dirname+'/user.json');
        let src=JSON.parse(source)
        let total=src.length;
        let {name,age,pageNum,pageSize}=ctx.request.body
        let tableData=[],tablePage={};
        if(name){
            src=src.filter(item=>item.name===name);
        }
        if(age){
            src=src.filter(item=>item.age===age)
        }
        if(pageSize || pageNum) {
            if(!pageNum) pageNum=1;
            tableData=src.slice((pageNum-1)*pageSize,pageNum*pageSize)
        }
        tablePage={
            pageNum,
            pageSize,
            total
        }
        ctx.body={code:200,msg:'查询成功',data:{tableData,tablePage}}
    }
    add(ctx){
        let obj=ctx.request.body
        obj.id=new Date().getTime()
        let created_at=formatDate(new Date())
        obj.created_at=created_at;
        const source=fs.readFileSync(__dirname+'/user.json');
        const src=JSON.parse(source);
        src.push(obj)
        fs.writeFileSync(__dirname+'/user.json',JSON.stringify(src))
        ctx.body={code:200,msg:'新增成功'}
    }
    edit(ctx){
        let {id,name,age,interst,sex}=ctx.request.body
        let updated_at=formatDate(new Date())
        const source=fs.readFileSync(__dirname+'/user.json');
        let src=JSON.parse(source);

        for(let item of src){
            if(item.id===id){
                item.name=name || item.name
                item.age=age || item.age
                item.sex=sex||item.sex
                item.interst=interst||item.interst
                item.updated_at=updated_at;
            }
        }
        fs.writeFileSync(__dirname+'/user.json',JSON.stringify(src))
        ctx.body={code:200,msg:'编辑成功'}
    }
    del(ctx){
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
    download(ctx){
        ctx.body={code:200,msg:'下载成功',url:'http://localhost:3000/excel/user.xlsx'}
        // ctx.body='http://localhost:3000/excel/user.xlsx'
    }
    async upload(ctx){
        let file = ctx.request.files;
        console.log(file)
        const filepath = file['file']['path'];
        const data=[];
        const keys=[];
        const fileStream = await fs.readFileSync(filepath);
        // 将文件存到指定位置
        fs.writeFile(path.join(__dirname, '../public/excel/upload.xlsx'), fileStream,()=>{});
        const workbook = new Excel.Workbook();

        await workbook.xlsx.readFile(path.join(__dirname, '../public/excel/upload.xlsx'));
        const worksheet = workbook.getWorksheet(1); //获取第一个worksheet
        let obj={}
        worksheet.eachRow(function(row, rowNumber) {
            // cell.type单元格类型：6-公式 ;2-数值；3-字符串
            row.eachCell(function(cell, colNumber) {
                if(rowNumber===1){
                    keys.push(cell.value);
                } else {
                    obj[keys[colNumber-1]]=cell.value
                }
            });
            if(rowNumber>1) data.push(obj)
        });
        ctx.body={code:200,msg:'上传成功',data}
    }
}
module.exports= UserController