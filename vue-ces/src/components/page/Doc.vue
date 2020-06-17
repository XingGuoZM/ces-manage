<template>
  <section class="doc-container">
    <div class="title">本系统基本说明</div>
    <div class="content">{{content}}</div>
  </section>
</template>

<script>
export default {
  name: 'Base',
  data(){
    return {
        content:'本系统包括两部分：koa-ces(后端)和vue-ces(前端)。'
    }
  },
  components:{}
}
</script>
<style scoped lang="stylus">
  .doc-container{
    padding-left:20px;
    padding-right:20px;
  }
  .title{
    width:100%; 
    height:80px;
    line-height:80px;
    font-size:20px;
    font-weight: bold;
    text-align: center;
    
  }
  .content{

  }
</style>
