const fs=require('fs')
const Excel = require('exceljs')
const formatDate = require('../util/formatDate')

class UserController{
    query(ctx){
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
        let {id,name,age,interst}=ctx.request.body
        let updated_at=formatDate(new Date())
        const source=fs.readFileSync(__dirname+'/user.json');
        let src=JSON.parse(source);
        for(let item of src){
            if(item.id===id){
                if(item.name) item.name=name;
                if(item.age) item.age=age;
                if(item.interst) item.interst=interst;
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
        let file = ctx.request.body.files;
        // const { name,path } = file;
        const filepath=file.path;
        const data=[];
        const keys=[];
        console.log(filepath)
        // file = fs.readFileSync(filepath);
        // // 将文件存到指定位置
        // fs.writeFileSync(path.join(__dirname, 'excels/upload.xlsx'), file);
//         const workbook = new Excel.Workbook();

//         await workbook.xlsx.readFile(__dirname+'/user.xlsx');
//         const worksheet = workbook.getWorksheet(1); //获取第一个worksheet
//         let obj={}
//         worksheet.eachRow(function(row, rowNumber) {
//             // cell.type单元格类型：6-公式 ;2-数值；3-字符串
//             row.eachCell(function(cell, colNumber) {
//                 if(rowNumber===1){
//                     keys.push(cell.value);
//                 } else {
//                     obj[keys[colNumber-1]]=cell.value
//                 }

//             });
//             if(rowNumber>1) data.push(obj)
//         });
        ctx.body={code:200,msg:'上传成功',data:file}
    }
}
module.exports= UserController