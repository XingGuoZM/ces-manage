
import API from '@/axios/api'
import {MessageBox, Message} from 'element-ui'
import mutationTypes from '@/store/mutation-types'
import {deepClone} from '@/assets/js/deepClone'

const initTypes = {
  QUERY: 'QUERY',
  ADD: 'ADD',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
  SHOW_EDIT_MODAL:'SHOW_EDIT_MODAL',
  HIDE_EDIT_MODAL:'HIDE_EDIT_MODAL'
}
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
      
      state.tableData=res.data.data
      state.tablePage.total=res.data.total
      state.tablePage.pageNum=res.data.pageNum

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
  validateAdd({dispatch,state},that){
    that.$refs.editForm.validate(valid=>{
      if(valid){
        dispatch('addData')
      }
    })
  },
  validateEdit({dispatch, state},that){
    that.$refs.editForm.validate(valid=>{
      if(valid){
        dispatch('editData')
      }
    })
  },
  showEditModal({commit},row){
    commit(initTypes.SHOW_EDIT_MODAL,{row})
  },
  hideEditModal({commit}){
    commit(initTypes.HIDE_EDIT_MODAL)
  },
  confirmDel ({dispatch,state},row) {
    MessageBox.confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
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
  [initTypes.SHOW_EDIT_MODAL] (state,{row}) {
    state.modalCfg.visible=true
    if(row){
      state.editData=row
      state.modalCfg.title='编辑'
      state.modalCfg.handles[0]={label:'编辑',type:'primary',size:'mini',handle:that=>that.validateEdit(that.$refs.cesEdit)}
    }else{
      state.editData=deepClone(mutationTypes.EDIT_DATA)
      state.modalCfg.title='新增',
      state.modalCfg.handles[0]={label:'新增',type:'primary',size:'mini',handle:that=>that.validateAdd(that.$refs.cesEdit)}
    }
  },
  [initTypes.HIDE_EDIT_MODAL] (state) {
    state.modalCfg.visible=false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
