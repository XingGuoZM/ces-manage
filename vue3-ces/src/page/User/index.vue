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
    <ces-modal 
      width='520px'
      :that='that' 
      :modalCfg='modalCfg'>
        <ces-edit ref='cesEdit' :that='that' 
          :editCfg='editForm'
          :editData='editData'
          :editRules='editRules' >
        </ces-edit>
      </ces-modal>
  </div>
</template>

<script>
import cesSearch from '@/components/Form/searchForm.vue';
import cesTable from '@/components/Table/Table.vue';
import cesModal from '@/components/Modal/Modal.vue';
import cesEdit from '@/components/Form/editForm.vue';

import {
  editForm,
  searchForm,
  tableCols,
  searchHandle,
  tableHandles,
  tablePage,
  editRules,
  modalCfg,
  searchData,
  editData,
  confirmDelete} from './config';
import {queryData} from './request';

export default  {
  data () {
    return {
      that:this,
      searchData,
      searchForm,
      searchHandle,
      loading:false,
      tableData:[],
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
      this.getData();
    },
    showEditModal({row,title}){
      modalCfg.visible=true;
      modalCfg.title=title;
      console.log(title)
      if(title==='编辑') this.editData=row;
    },
    hideEditModal(){
      modalCfg.visible=false
    },
    async getData(){
      const res = await queryData();
      this.tableData=res;
    },
    getFileData(){

    },
    resetData(){
      
    },
    confirmDel:(row)=>confirmDelete(row),
    downloadExcel(){

    },
    validateEdit(){
      
    },
    validateAdd(){

    }
  },
  mounted(){
    this.init();
  }
};

</script>

<style>

</style>
