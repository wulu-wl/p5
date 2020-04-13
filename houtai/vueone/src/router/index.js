import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/login'
import userfenxi from '@/components/userfenxi'
import jrqx from '@/components/jrqx'
import showQx from '@/components/showQx'
import updataQx from '@/components/updataQx'
import product from '@/components/product'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[{
        path: "/home/userfenxi",
        name: 'userfenxi',
        component: userfenxi
      },{
        path: "/home/entrityquanxian",
        name: 'jrqx',
        component: jrqx
      },{
        path:"/home/accountquanxian",
        name:"showQx",
        component:showQx
      },{
        path:"/home/updataQx/:id",
        name:"updataQx",
        component:updataQx
      },{
        path:"/home/productmanger",
        name:"product",
        component:product
      }]
    }, {
      path: '/',
      name: 'login',
      component: Login
    },
  ]
})
