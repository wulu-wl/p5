import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import My from '@/components/my'
// import Car from '@/components/car'
import Car11 from '@/components/car11'
import Login from '@/components/login'
import Page from '@/components/page'
import Fenlei from '@/components/fenlei'
import Xq from '@/components/xq'
import Search from '@/components/search'
import Sure from '@/components/sure1'
import Adddizhi from '@/components/adddizhi'
import Adddz from '@/components/adddz'


Vue.use(Router)

export default new Router({
  routes: [
      {
      path: "/",
      component: Page,
      children: [{
        path: '/',
        component: Home
      }, {
        path: '/my',
        component: My
      }, {
        path: '/car11',
        component: Car11
      }]
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/fenlei/:id',
      component: Fenlei
    },{
      path: '/xq/:id',
      component: Xq
    },{
      path: '/search',
      component:Search
    },{
      path: '/sure1',
      component:Sure
    },{
      path: '/adddizhi',
      component:Adddizhi
    },{
      path: '/adddz',
      component:Adddz
    }
  ]
})
