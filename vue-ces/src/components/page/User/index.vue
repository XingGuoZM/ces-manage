<template>
  <div class="ces-main">
    <!-- 搜索 -->
    <ces-search 
      :that='that'
      size='mini'
      labelWidth = '50px' 
      :searchData = "searchData"
      :searchForm = "searchForm"
      :searchHandle="searchHandle"></ces-search>

    <!-- 操作表格 -->
    <ces-table 
      :that='that'
      size='mini'
      :isSelection='true'
      :isIndex='true'
      :isPagination='true'
      :isHandle='true'
      :tableData='tableData' 
      :tableCols='tableCols' 
      :tableHandles='tableHandles'
      :tablePage='tablePage'></ces-table>

    <!-- 弹窗 -->
    <ces-modal width='450px'
      :that='that' :modalCfg='modalCfg'>
        <ces-edit ref='cesEdit' :that='that' 
          :editCfg='editForm' 
          :editData='editData' 
          :editRules='editRules' ></ces-edit>
      </ces-modal>
  </div>
</template>

<script>
import cesSearch from '@/components/common/Form/searchForm'
import cesTable from '@/components/common/Table/Table'
import cesModal from '@/components/common/Modal/Modal'
import cesEdit from '@/components/common/Form/editForm'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('User')

export default {
  data () {
    return {
      that:this
    }
  },
  components:{
    cesTable,
    cesSearch,
    cesModal,
    cesEdit
  },
  computed:{
    ...mapGetters([
      'searchData','searchForm','searchHandle',
      'loading','tableData','tableCols','tableHandles','tablePage',
      'modalCfg',
      'editForm','editData','editRules'])
  },
  methods:{
    ...mapActions(['init','showEditModal','hideEditModal','getData','resetData','validateAdd','confirmDel','downloadExcel','validateEdit'])
  },
  mounted(){
    this.init()
    
  }
}
</script>

<style>

</style>
