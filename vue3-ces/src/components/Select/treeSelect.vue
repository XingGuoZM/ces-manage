<!-- 下拉选择树 -->
<template>

<el-popover  trigger="click" v-model="visible" placement="bottom-start">
    <div class="card-tree" style="width:200px;height:300px;overflow:auto;" >
        <el-tree :data="data" node-key="id" highlight-current :props="treeProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <el-input slot="reference" v-model="name" :disabled="disabled"></el-input>
</el-popover>

</template>

<script>
export default {
  model:{
    prop:'value',
    event:'change'
  },
  props:['data','treeProps','value','disabled'],
  data() {
    return {
      visible:false,  
    };
  },
  computed:{

    name:function(){
      let res=''
      let that=this;
      // 深度优先遍历树
      function dfs(tree,val){
        for(let i=0;i<tree.length;i++){
          if(tree[i][that.treeProps.value]===val){
            res=tree[i][that.treeProps.label];
          }else if(tree[i][that.treeProps.children] && tree[i][that.treeProps.children].length>0){
            dfs(tree[i][that.treeProps.children],val);
          }
        }
      }
      dfs(this.data,this.value);
      return res;
    }
  },
  methods: {
    handleNodeClick(data){
      this.visible=false;
      this.$emit('change',data[this.treeProps.value]);
    }
  }
};
</script>
<style >
</style>