<template>
  <div class="ces-main">
    <!-- 搜索 -->
    <ces-search 
      :that='that'
      labelWidth = '50px' 
      :searchData = "searchData"
      :searchForm = "searchForm"
      :searchHandle="searchHandle"></ces-search>

    <!-- 操作表格 -->
    <ces-table 
      :that='that'
      :isSelection='true'
      :isIndex='true'
      :isPagination='true'
      :isHandle='true'
      :tableData='tableData' 
      :tableCols='tableCols' 
      :tableHandles='tableHandles'
      :tablePage='tablePage'></ces-table>

    <!-- 弹窗 -->
    <ces-modal width='520px'
      :that='that' :modalCfg='modalCfg'>
        <ces-edit ref='cesEdit' :that='that' 
          :editCfg='editForm' 
          :editData='editData' 
          :editRules='editRules' ></ces-edit>
      </ces-modal>
  </div>
</template>

<script>
import cesSearch from '@/components/Form/searchForm'
import cesTable from '@/components/Table/Table'
import cesModal from '@/components/Modal/Modal'
import cesEdit from '@/components/Form/editForm'


import {editForm,searchForm,tableCols,searchHandle,tableHandles,tablePage,editRules,modalCfg,searchData,editData} from './config'

import {userData} from './mock'
export default {
  data () {
    return {
      that:this,
      searchData,
      searchForm,
      searchHandle,
      loading:false,
      tableData:userData,
      tableCols,
      tableHandles,
      tablePage,
      modalCfg,
      editForm,
      editData,
      editRules,
    }
  },
  components:{
    cesTable,
    cesSearch,
    cesModal,
    cesEdit
  },
  computed:{
  },
  methods:{
    init(){

    },
    showEditModal(){

    },
    hideEditModal(){

    },
    getData(){

    },
    getFileData(){

    },
    resetData(){

    },
    confirmDel(){

    },
    downloadExcel(){

    },
    validateEdit(){

    }
  },
  mounted(){
    this.init()
    
  }
}
</script>

<style>

</style>
