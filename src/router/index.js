import Vue from 'vue'
import Router from 'vue-router'
import ispc from '@/components/ispc'
import homePc from '@/components/homePc'
import login from '@/components/login'
import service from '@/components/service'
//import homePhone from '@/components/homePhone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ispc',
      component: ispc,
    },
    {
      path: '/homePc',
      name: 'homePc',
      component: homePc
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
//  {
//    path: '/homePhone',
//    name: 'homePhone',
//    component: homePhone
//  },
  ]
})
