import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Dis from '@/components/dis'
import My from '@/components/my'
import Order from '@/components/order'
import Search from '@/components/search'
import Page from '@/components/page'
import xq from '@/components/xq'
import shopcar from '@/components/shopcar'
import login from '@/components/login'

Vue.use(Router)

let router=new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: Page,
      children:[{
        path:"/my",
        name:'my',
        component:My
      },{
        path:"/order",
        name:'order',
        component:Order
      },{
        path:"/dis",
        name:'dis',
        component:Dis
      },{
        path:"/index",
        name:'index',
        component:Index
      },{
        path:"/",
        redirect:'/index'
      }]
    },{
      path:"/search",
      name:'search',
      component:Search
    },{
      path:"/xq/:id",
      name:'xq',
      meta:{
        isLogin:true
      },
      component:xq
    },{
      path:"/shopcar/:id",
      name:'shopcar',
      component:shopcar
    },{
      path:"/login",
      name:'login',
      component:login
    },
  ]
})


// router.beforeEach((from,to,next)=>{
//   // console.log(from)
//   // console.log(to)
//   // console.log(next)
//   if(to.meta.isLogin){
//     if(false){  //判断该路由需要是否需要登录
//         next()  
//     }else{
//         // alert("先去登陆吧")
//         next({ path: "/login" })
//     }
//   }else{//一路到底
//     next()
//   }
// })

//全局
router.beforeEach((to,from,next)=>{
   let token=sessionStorage.getItem('token')
  // console.log(token)
  // 排除登陆页面
  if(to.name !='login'){
    if(token){
      next()
  }else{
      alert("请先登录再进")
      router.push({name:'login'})
  }
  }else{
    next()
  }
 

})

// router.beforeEach((to,from,next)=>{
//   let token=sessionStorage.getItem('token')?JSON.parse(sessionStorage.getItem('token')):'';
//   if(to.name!='login'){

//   }
// })

export default  router