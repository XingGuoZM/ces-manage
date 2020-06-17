<template>
  <el-row class="main-wrap">
    <el-col :span="3" class="left-nav">
      <el-menu
        class="left-nav-list"
        :router='true'
        background-color="#070916"
        text-color="#fff"
        :default-active="$route.path"
      >
        <tree-menu :menus="leftmenus"></tree-menu>
      </el-menu>
    </el-col>
    <el-col :span="21" class="right-content">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </el-col>
  </el-row>
</template>

<script>
import treeMenu from '@/components/common/TreeMenu/treeMenu'
export default {
  name: 'Base',
  data(){
    return {
      leftmenus:[
        {menuName:'用户管理',menuUrl:'/Base/user'}
      ]
    }
  },
  components:{treeMenu}
}
</script>
<style scoped lang="stylus">
</style>
