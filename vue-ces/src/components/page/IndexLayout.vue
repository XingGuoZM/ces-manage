<template>
  <section class="main-wrap">
    <div class="nav-all" style="display:flex;">
      <div style="width:200px;">
        <span class="nav-text">后台管理系统</span>
      </div>
      <div  style="width:calc(100% - 350px);">
        <ul class="nav-list">
          <li v-for="item in nav" :key="item.numbers">
            <router-link :to="item.router" v-if="item.router">{{item.name}}</router-link>
            <span v-else>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="nav-tail" style="width:100px;">
        <span class="admin">管理员</span>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexLayout',
  data () {
    return {
      currentdate: null,
      nav: [
        {
          'name': '基础组件',
          'numbers': '1',
          'router': '/Base'
        }
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
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .main-wrap
    height 100%
    width 100%
    position relative
    .back-btn-wrap
      padding 20px 50px 20px 0
      text-align right
    .content
      height calc(100% - 71px)
      width 100%
      overflow hidden
    .nav-all
      border-bottom 1px transparent solid
      border-image -webkit-linear-gradient(to right , #3c486d, #070916) 30 30
      border-image -moz-linear-gradient(to right, #3c486d, #070916) 30 30
      border-image linear-gradient(to right, #3c486d, #070916 ) 30 30
      background #070916
    .nav-text
      font-size 25px
      cursor pointer
      font-weight bold
      background -webkit-linear-gradient(top, #91f5ff, #1cbef6)
      -webkit-background-clip text
      -webkit-text-fill-color transparent
      height 70px
      line-height 70px
      padding-left 20px
    .nav-time
      text-align right
      font-size 15px
      color white
      height 70px
      line-height 70px
    .nav-time-left
      display inline-block
      transform scale(0.8)
    .nav-time-right
      margin-left 3px
      display inline-block
      //  float right
    .nav-tail
      font-size 15px
      padding-right 20px
      line-height 70px
      text-align right
      cursor pointer
      color #ffffff
    .loginOut
      margin-left 25px
    .admin
      color #33bde9
    .nav-list
      padding-left 20px
    .nav-list li
      color white
      text-align center
      line-height 70px
      padding 0 28px
      display inline-block
      float left
      cursor pointer
    .nav-list a, .nav-list span
      height 70px
      display inline-block
      text-decoration none
      color #ffffff
      &:hover, &.router-link-exact-active, &.router-link-active
        border-bottom 5px solid #a68bfb
        color #75e8fd
</style>
