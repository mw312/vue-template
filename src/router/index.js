import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import module1Index from '@/page/module1/module1_index'
import module2Index from '@/page/module2/module2_index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/module1/index/:id',
      name: 'module1Index',
      component: module1Index
    },
    {
      path: '/module2/index',
      name: 'module2Index',
      component: module2Index
    }
  ]
})
