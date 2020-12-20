<template>
  <section class="main-wrap">
    <div class="nav-all">
      <div style="width:200px;">
        <span class="nav-text">{{title}}</span>
      </div>
      <div  style="width:calc(100% - 350px);">
        <ul class="nav-list">
          <li v-for="item in nav" :key="item.numbers">
            <router-link :to="item.router" v-if="item.router">{{item.name}}</router-link>
            <span v-else>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="nav-tail">
          <el-popover
            placement="top-start"
            width="100"
            trigger="hover">
            <div class="lan-tab" @click="changeLanguage('en')">en</div>
            <div class="lan-tab" @click="changeLanguage('zh')">zh</div>
            <span slot="reference">{{globalSetting}}</span>
          </el-popover>
        <span class="admin">{{user}}</span>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </section>
</template>

<script>
import i18n from '@/i18n/index'
export default {
  name: 'IndexLayout',
  data () {
    return {
      title:i18n('Global@Title','后台管理系统'),
      user:i18n('Global@Admin','管理员'),
      globalSetting:i18n("Global@GlobalSetting",'多语言'),
      currentdate: null,
      nav: [
        {
          'name': i18n('Global@Base','基础组件'),
          'numbers': '1',
          'router': '/Base'
        },{
          'name': i18n('Global@Doc','使用说明'),
          'numbers': '2',
          'router': '/Doc'
        },{
          'name': i18n('Global@Config','基本配置'),
          'numbers': '3',
          'router': '/Config'
        },
      ]
    }
  },
  mounted () {
    this.handleTime()
    let _this = this
    this.timer = setInterval(() => {
      _this.handleTime()
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    handleTime () {
      let date = new Date()
      let seperator1 = '-'
      let year = date.getFullYear()
      let month = this.isAddZero(date.getMonth() + 1)
      let strDate = this.isAddZero(date.getDate())
      let hours = date.getHours()
      let Minutes = this.isAddZero(date.getMinutes())
      let currentdate = year + seperator1 + month + seperator1 + strDate + ' ' + hours + ':' + Minutes
      this.currentdate = currentdate
    },
    isAddZero (value) {
      if (value >= 0 && value <= 9) {
        value = '0' + value
      }
      return value
    },
    changeLanguage(type){
      localStorage.setItem('language',type)
      location.reload();
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

