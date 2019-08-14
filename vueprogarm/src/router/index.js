import Vue from 'vue'
import Router from 'vue-router'
import ispc from '@/components/ispc'
import homePc from '@/components/home'
import father from '@/components/father'
import son from '@/components/son'
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
      path: '/father',
      name: 'father',
      component: father
    },
    {
      path: '/son',
      name: 'son',
      component: son
    },
//  {
//    path: '/homePhone',
//    name: 'homePhone',
//    component: homePhone
//  },
  ]
})
