import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import LoginIn from '@/components/loginIn'
import Updpass from '@/components/updpass'
import Page from '@/components/page'
import Home from '@/components/home'
import Collection from '@/components/collection'
import Cooktype from '@/components/cooktype'
import Video from '@/components/video'
import Minemenu from '@/components/minemenu'
import Foodlist from '@/components/foodlist'
import xq from '@/components/xq'
import Minemenu_1 from '@/components/minemenu_1'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'page',
    component: Page,
    children:[{
      //首页
      path: '/',
      name: 'home',
      component: Home,
    },{
      //收藏
      path: '/collection',
      name: 'collection',
      component: Collection,
    },{
      //视频
      path: '/video',
      name: 'video',
      component: Video,
    },{
      //我的菜单
      path: '/minemenu',
      name: 'minemenu',
      component: Minemenu,
    }]
    },{
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/loginIn',
      name: 'loginIn',
      component: LoginIn
    },{
      //修改密码
      path: '/updpass',
      name: 'updpass',
      component: Updpass
    },{
      //首页食材大全分类页面
      path: '/foodlist',
      name: 'foodlist',
      component: Foodlist,
    },{
      //底部路由分类
      path: '/cooktype',
      name: 'cooktype',
      component: Cooktype,
    },{
      //底部路由分类
      path: '/xq',
      name: 'xq',
      component: xq,
    },{
      //我的菜单对应的菜单
      path: '/minemenu_1/:id',
      name: 'minemenu_1',
      component: Minemenu_1,
    }]
})
