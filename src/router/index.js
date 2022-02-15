import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import starrySky from '@/components/starrySky'
import starrySky2 from '@/components/starrySky2'
import CreateDevice from '@/views/IOT-test/CreateDevice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
      ]
    },
    {
      path: '/starrySky',
      name: 'starrySky',
      component: starrySky
    },
    {
      path: '/starrySky2',
      name: 'starrySky2',
      component: starrySky2
    },
    {
      path: '/CreateDevice',
      name: 'CreateDevice',
      component: CreateDevice
    }
  ]
})
