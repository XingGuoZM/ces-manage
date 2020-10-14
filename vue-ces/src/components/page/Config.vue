<template>
<div class="configContainer">
    <section>搜索字段选择展示</section>
    <ces-edit ref='cesEdit' :that='that' 
          :editCfg='searchForm' 
          :editData='searchData' ></ces-edit>
    
    <section>表格列选择展示</section>
    <ces-edit ref='cesEdit' :that='that' 
          :editCfg='tableForm' 
          :editData='tableData' ></ces-edit>
    <section>操作权限选择展示</section>
    <ces-edit ref='cesEdit' :that='that' 
          :editCfg='handleForm' 
          :editData='handleData' ></ces-edit>
</div>

</template>
<script>
import cesEdit from '@/components/common/Form/editForm'
import i18n from '@/i18n/index'
export default {
    name:'config',
    data(){
        return {
            that:this,
        //编辑表单
            searchForm:[
                {label:i18n("Global@EditName",'姓名'),prop:'name',type:'switch',isEdit:true},
                {label:i18n("Global@EditAge",'年龄'),prop:'age',type:'switch',isEdit:true},
                {label:i18n("Global@EditSex",'性别'),prop:'sex',type:'switch',isEdit:true},
                {label:i18n("Global@EditInterst",'爱好'),prop:'interst',type:'switch',isEdit:true},
            ],
            searchData:{
                name:null,
                age:null,
            },
            tableForm:[                
                {label:i18n("Global@TableName",'姓名'),prop:'name',type:'switch',isEdit:true},
                {label:i18n("Global@TableAge",'年龄'),prop:'age',type:'switch',isEdit:true},
                {label:i18n("Global@TableSex",'性别'),prop:'sex',type:'switch',isEdit:true},
                {label:i18n("Global@TableInterst",'爱好'),prop:'interst',type:'switch',isEdit:true},
                {label:i18n("Global@TableOperation",'操作'),prop:'operation',type:'switch',isEdit:true},
                {label:i18n("Global@TablePagination",'分页'),prop:'pagination',type:'switch',isEdit:true},
                {label:i18n("Global@TableSelection",'选择'),prop:'selection',type:'switch',isEdit:true},
                {label:i18n("Global@TableIndex",'序号'),prop:'index',type:'switch',isEdit:true},
                ],
            tableData:{
                name:true,
                age:null,
                sex:null,
                interst:null,
                operation:null,
                pagination:null,
                selection:null,
                index:null
            },
            handleForm:[
                {label:i18n("Global@Add",'新增'),prop:'add',type:'switch',isEdit:true},
                {label:i18n("Global@Upload",'上传'),prop:'upload',type:'switch',isEdit:true},
                {label:i18n("Global@Download",'下载'),prop:'download',type:'switch',isEdit:true},
                {label:i18n("Global@Edit",'编辑'),prop:'edit',type:'switch',isEdit:true},
                {label:i18n("Global@Del",'删除'),prop:'del',type:'switch',isEdit:true},
            ],
            handleData:{
                add:null,
                upload:null,
                download:null,
                edit:null,
                del:null
            }
        }
    },
    components:{
        cesEdit
    }
}
</script>
<style scoped>
.configContainer{
    padding:20px;
}
</style>