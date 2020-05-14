
// import { formateDateTime } from '@/assets/js/formatDateTime'
import initTypes from '@/store/init-types'
const sexs=[{label:'男',value:'M'},{label:'女',value:'F'}]
const intersts=[{label:'羽毛球',value:'badminton'},{label:'篮球',value:'basketball'},{label:'书籍',value:'book'},{label:'游戏',value:'game'}]

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
      {type:'input',label:'姓名:',prop:'name',width:'180px',placeholder:'请输入姓名...',change:that=>that.getData()},
      {type:'input',label:'年龄:',prop:'age',width:'180px',placeholder:'请输入年龄...',change:that=>that.getData()},
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
      {label:'查询',handle:that=>that.getData()},
      {label:'重置',handle:that=>that.resetData()}
    ],
    
    // 表格
    TABLE_DATA:[],
    TABLE_COLS:[
      {label:'姓名',prop:'name'},
      {label:'年龄',prop:'age'},
      {label:'性别',prop:'sex',formatter:row=>formatSex(row)},
      {label:'爱好',prop:'interst',formatter:row=>formatInterst(row)},
      {label:'操作',type:'button',width:'150px',btnList:[
        {label:initTypes.EDIT,handle:(that,row)=>that.showEditModal({row,type:initTypes.EDIT}),isDisabled:function(row){
          // if(row.sex==='M'){
          //   return true
          // }else if(row.sex==='F'){
          //   return false
          // }
        }},
        {type:'danger',label:initTypes.DELETE,handle:(that,row)=>that.confirmDel(row),isDisabled:function(row){
          // if(row.sex==='M'){
          //   return false
          // }else if(row.sex==='F'){
          //   return true
          // }
        }}
      ]}
    ],
    TABLE_HANDLES:[
      {label:initTypes.ADD,handle:(that,row)=>that.showEditModal({row,type:initTypes.ADD})},
      {label:initTypes.UPLOAD,handle:(that,row)=>that.showEditModal({row,type:initTypes.UPLOAD})},
      {label:initTypes.DOWNLOAD,handle:(that,row)=>that.downloadExcel({row,type:initTypes.DOWNLOAD})}
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
      {label:'姓名',prop:'name',type:'input',width:'280px',isEdit:true},
      {label:'年龄',prop:'age',type:'input',width:'280px',isEdit:true},
      {label:'性别',prop:'sex',type:'radio',radios:sexs, width:'280px',isEdit:true},
      {label:'爱好',prop:'interst',type:'checkbox',checkboxs:intersts,width:'280px',isEdit:true},
      {label:'上传文件',prop:'upload',type:'upload',width:'280px',isEdit:false}
    ],
    EDIT_DATA:{
      name:null,
      age:null,
      sex:null,
      interst:[]
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
        {...initTypes.DEFAULT_BUTTON,label:initTypes.ADD,handle:that=>that.validateAdd()},
        {...initTypes.DEFAULT_BUTTON,label:initTypes.CANCEL,handle:that=>that.hideEditModal()}
      ],
    }
  }
  
  export default mutationTypes
  