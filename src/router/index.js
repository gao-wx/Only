import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import starrySky from '@/components/starrySky'
import starrySky2 from '@/components/starrySky2'
import CreateDevice from '@/views/IOT-test/CreateDevice'
import index from '@/views/index'
import login from '@/views/login/login'

Vue.use(Router)

//获取原型对象上的push函数
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/index',
      name: 'index',
      component: index,
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
