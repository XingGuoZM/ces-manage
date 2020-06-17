
// import { formateDateTime } from '@/assets/js/formatDateTime'
import initTypes from '@/store/init-types'
import i18n from '@/i18n/index'
const sexs=[
  {label:i18n("Global@Male",'男'),value:'M'},
  {label:i18n("Global@Female",'女'),value:'F'}]
const intersts=[
  {label:i18n("Global@Badminton",'羽毛球'),value:'badminton'},
  {label:i18n("Global@Basketball",'篮球'),value:'basketball'},
  {label:i18n("Global@Book",'书籍'),value:'book'},
  {label:i18n("Global@Game",'游戏'),value:'game'}]

const formatSex=row=>{
  let info = ' '
  sexs.forEach(item=>{
    if(item.value===row.sex) info = item.label
  })
  return info
}
const formatInterst=row=>{
  let info = []
  intersts.forEach(item=>{
    row.interst.forEach(i=>{
      if(i===item.value) info.push(item.label)
    })
  })
  if(info.length===0) return ' '
  return info.join()
}
const mutationTypes = {
    
    // 搜索
    SEARCH_FORM:[
      {type:'input',label:i18n("Global@SearchNameLabel","姓名"),prop:'name',width:'180px',
        placeholder:i18n("Global@SearchNamePlaceholder",'请输入姓名...'),change:that=>that.getData()},
      {type:'input',label:i18n("Global@SearchAgeLabel",'年龄'),prop:'age',width:'180px',
        placeholder:i18n("Global@SearchAgePlaceholder",'请输入年龄...'),change:that=>that.getData()},
      // {type:'radio',label:'性别:',prop:'sex',width:'180px',radios:sexs,change:that=>that.getData()},
      // {type:'checkbox',label:'爱好:',width:'220px',prop:'interst',checkboxs:intersts,change:that=>that.getData()}
    ],
    SEARCH_DATA:{
      name:null,
      age:null,
      // sex:null,
      // interst:null
    },
    SEARCH_HANDLE:[
      {label:i18n("Global@Query",'查询'),handle:that=>that.getData()},
      {label:i18n("Global@Reset",'重置'),handle:that=>that.resetData()}
    ],
    
    // 表格
    TABLE_DATA:[],
    TABLE_COLS:[
      {label:i18n("Global@TableName",'姓名'),prop:'name'},
      {label:i18n("Global@TableAge",'年龄'),prop:'age'},
      {label:i18n("Global@TableSex",'性别'),prop:'sex',formatter:row=>formatSex(row)},
      {label:i18n("Global@TableInterst",'爱好'),prop:'interst',formatter:row=>formatInterst(row)},
      {label:i18n("Global@TableOperation",'操作'),type:'button',width:'180px',btnList:[
        {label:i18n('Global@Edit',"编辑"),handle:(that,row)=>that.showEditModal({row,type:i18n('Global@Edit',"编辑")}),isDisabled:function(row){
          // if(row.sex==='M'){
          //   return true
          // }else if(row.sex==='F'){
          //   return false
          // }
        }},
        {type:'danger',label:i18n('Global@Del','删除'),handle:(that,row)=>that.confirmDel(row),isDisabled:function(row){
          // if(row.sex==='M'){
          //   return false
          // }else if(row.sex==='F'){
          //   return true
          // }
        }}
      ]}
    ],
    TABLE_HANDLES:[
      {label:i18n("Global@Add","新增"),handle:(that,row)=>that.showEditModal({row,type:i18n("Global@Add","新增")})},
      {label:i18n("Global@Upload",'上传'),handle:(that,row)=>that.showEditModal({row,type:i18n("Global@Upload",'上传')})},
      {label:i18n("Global@Download",'下载'),handle:(that,row)=>that.downloadExcel({row,type:i18n("Global@Download",'下载')})}
    ],
    TABLE_PAGE: {
      pageSize: 10,
      total: 1,
      pageNum: 1,
      handlePageNumChange:(that,val)=>{
        that.$store.state.User.tablePage.pageNum=val
        that.getData()
      },
      handlePageSizeChange:(that,val)=>{
        that.$store.state.User.tablePage.pageSize=val
        that.getData()
      }
    },
    //编辑表单
    EDIT_FORM:[
      {label:i18n("Global@EditName",'姓名'),prop:'name',type:'input',width:'280px',isEdit:true},
      {label:i18n("Global@EditAge",'年龄'),prop:'age',type:'input',width:'280px',isEdit:true},
      {label:i18n("Global@EditSex",'性别'),prop:'sex',type:'radio',radios:sexs, width:'280px',isEdit:true},
      {label:i18n("Global@EditInterst",'爱好'),prop:'interst',type:'checkbox',checkboxs:intersts,width:'280px',isEdit:true},
      {label:'上传文件',prop:'upload',type:'upload',width:'280px',isEdit:false,
        action:'https://jsonplaceholder.typicode.com/posts/',autoUpload:true,
        success(that,response, file, fileList){ console.log(that);that.getFileData(response)}
      },
      {label:'文件数据',prop:'table',type:'table',width:'280px',isEdit:false,
        cols:[
          {prop:'name',label:'姓名'},
          {prop:'age',label:'年龄'},
          {prop:'sex',label:'性别'},
          {prop:'interst',label:'兴趣'}
        ]
      }
    ],
    EDIT_DATA:{
      name:null,
      age:null,
      sex:null,
      interst:[],
    },
    EDIT_RULES:{
      name:[
        { required: true, message: '请输入姓名', trigger: 'blur' },
      ]
    },
    // 弹窗
    MODAL_CFG:{
      visible:false,
      title:null,
      close:that=>that.hideEditModal(),
      handles:[
        {...initTypes.DEFAULT_BUTTON,label:i18n("Global@Add",'新增'),handle:that=>that.validateAdd()},
        {...initTypes.DEFAULT_BUTTON,label:i18n("Global@Cancel",'取消'),handle:that=>that.hideEditModal()}
      ]
    }
  }
  
  export default mutationTypes
  