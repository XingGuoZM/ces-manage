import Vue from 'vue'
import Router from 'vue-router'
import IndexLayout from '@/components/page/IndexLayout'

// 基本组件
import Base from '@/components/page/Base'
import User from '@/components/page/User/index'
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
        }
      ]
    }
  ]
})
