import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import liuyan from '@/components/liuyan'
import fenlei from '@/components/fenlei'
import mesg from '@/components/mesg'
import home from '@/components/home'
import list from '@/components/list'
import list_one from '@/components/list_one'
import list_two from '@/components/list_two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      redirect:'/home',
      children:[
        {
          path: 'home',
          name: 'home',
          component: home

        },
        {
          path: 'liuyan',
          name: 'liuyan',
          component: liuyan

        },
        {
          path: 'fenlei',
          name: 'fenlei',
          component: fenlei

        },
        {
          path: 'mesg',
          name : 'mesg',
          component : mesg

        },
        {
          path: 'list',
          name: 'list',
          component: list

        },
        {
          path: 'list_one',
          name: 'list_one',
          component: list_one

        },
        {
          path: 'list_two',
          name: 'list_two',
          component: list_two

        },
      ]
    },
    
  ]
})
