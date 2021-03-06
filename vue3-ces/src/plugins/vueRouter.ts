import Vue from 'vue'
import Router from 'vue-router'
import IndexLayout from '@/page/IndexLayout.vue'

// 基本组件
import Base from '@/page/Base.vue'
import Doc from '@/page/Doc.vue'
import Config from '@/page/Config.vue'
import User from '@/page/User/index.vue'
// import tree from '@/components/page/Tree/index'
// import treeTable from '@/components/page/TreeTable/index'
// import test from '@/components/page/Test/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexLayout',
      component: IndexLayout,
      redirect: '/Base',
      children: [
        {
          path: '/Base',
          name: 'Base',
          component: Base,
          redirect: '/Base/user',
          children: [
            {
              path: '/Base/user',
              name: 'user',
              component: User
            }
          ]
        },{
          path: '/Doc',
          name: 'Doc',
          component: Doc
        },{
          path: '/Config',
          name: 'Config',
          component: Config
        }
      ]
    }
  ]
})
