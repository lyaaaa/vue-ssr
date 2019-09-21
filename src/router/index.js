import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import user from '@/components/user'

Vue.use(Router)

// 创建router实例
export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{ path: '/', component: home }, { path: '/user', component: user }]
  })
}
