
import API from '@/axios/api'
import {MessageBox, Message} from 'element-ui'
import mutationTypes from '@/store/mutation-types'
import  initTypes from '@/store/init-types'
import {deepClone} from '@/assets/js/deepClone'

// initial state
const state = {
  // 查询表单
  searchData:deepClone(mutationTypes.SEARCH_DATA),
  searchForm:mutationTypes.SEARCH_FORM,
  searchHandle:mutationTypes.SEARCH_HANDLE,

  // 表格
  tableData: mutationTypes.TABLE_DATA,
  tableCols:mutationTypes.TABLE_COLS,
  tableHandles:mutationTypes.TABLE_HANDLES,
  tablePage:deepClone(mutationTypes.TABLE_PAGE),
  // 弹窗
  modalCfg:mutationTypes.MODAL_CFG,
  // 编辑表单
  editData:deepClone(mutationTypes.EDIT_DATA),
  editForm:mutationTypes.EDIT_FORM,
  editRules:mutationTypes.EDIT_RULES
}

const getters = {
  searchData: state=>state.searchData,
  searchForm:state=>state.searchForm,
  searchHandle:state=>state.searchHandle,

  tableData: state => state.tableData,
  tableHandles: state => state.tableHandles,
  tableCols: state => state.tableCols,
  tablePage: state => state.tablePage,

  modalCfg:state=>state.modalCfg,

  editData:state=>state.editData,
  editForm:state=>state.editForm,
  editRules:state=>state.editRules

}

const actions = {
  init ({ commit,dispatch, state }) {
    dispatch('getData')
  },
  async getData ({ commit, state }) {
      let res=await API.User.query({...state.searchData,...state.tablePage})
      const {tableData,tablePage}=res.data.data;
      state.tableData=deepClone(tableData)
      state.tablePage=deepClone(tablePage)
      // state.tablePage.total=res.data.total
      // state.tablePage.pageNum=res.data.pageNum
  },
  
  async addData ({dispatch, commit, state}) {
    await API.User.add(state.editData)
    commit(initTypes.HIDE_EDIT_MODAL)
    dispatch('getData')

  },
  async editData ({commit,dispatch, state}) {
    await API.User.edit(state.editData)
    commit(initTypes.HIDE_EDIT_MODAL)
    dispatch('getData')
  },
  async delData ({commit,dispatch, state},id) {
    await API.User.del({id})
    dispatch('getData')
  },
  resetData ({commit,dispatch, state}) {
    // state.tablePage=deepClone(mutationTypes.TABLE_PAGE)
    state.searchData=deepClone(mutationTypes.SEARCH_DATA)
    dispatch('getData')
  },
  getFileData({dispatch,state},res){
    state.editData.table=res.data;
  },
  validateEdit({dispatch, state},{that,type}){
    that.$refs.editForm.validate(valid=>{
      if(valid){
        switch(type){
          case initTypes.ADD:
          case initTypes.UPLOAD:
              dispatch('addData')
            break;
          case initTypes.EDIT:
              dispatch('editData')
            break;
          default:
            break;
        }
      }
    })
  },
  async downloadExcel(){
    await API.User.download()
  },
  showEditModal({commit},{row,type}){
    commit(initTypes.SHOW_EDIT_MODAL,{row,type})
  },
  hideEditModal({commit}){
    commit(initTypes.HIDE_EDIT_MODAL)
  },
  confirmDel ({dispatch,state},row) {
    MessageBox.confirm(initTypes.TIPS_TEXT, initTypes.TIPS, {
      confirmButtonText: initTypes.CONFIRM,
      cancelButtonText: initTypes.CANCEL,
      type: 'warning'
    }).then(() => {
      dispatch('delData',row.id)
    }).catch(() => {
      
    });
  }
}

const mutations = {

  [initTypes.QUERY] (state, {tableData}) {
    state.tableData = tableData
  },
  [initTypes.SHOW_EDIT_MODAL] (state,{row,type}) {
    let currForm=deepClone(mutationTypes.EDIT_FORM)
    state.modalCfg.visible=true
    state.modalCfg.title=type
    state.modalCfg.handles[0]={...initTypes.DEFAULT_BUTTON,label:type,handle:that=>that.validateEdit({that:that.$refs.cesEdit,type})}
    switch(type){
      case initTypes.ADD:
        state.editData=deepClone(mutationTypes.EDIT_DATA)
        state.editForm=currForm.filter(item=>item.isEdit)
        break;
      case initTypes.EDIT:
        state.editData=row
        state.editForm=currForm.filter(item=>item.isEdit)
        break;
      case initTypes.UPLOAD:
        state.editForm=currForm.filter(item=>{
          if(item.action) item.action=API.User.upload()
          return !item.isEdit
        })
        break;
      default:
        break;
    }
  },
  [initTypes.HIDE_EDIT_MODAL] (state) {
    state.modalCfg.visible=false
  },
  [initTypes.SHOW_UPLOAD_MODAL](state){
    state.modalCfg.visible=false
  },
  [initTypes.HIDE_UPLODAD_MODAL](state){

  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
