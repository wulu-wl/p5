import Vue from 'vue'
import Router from 'vue-router'
import Fu from '@/components/Fu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fu',
      component: Fu
    }
  ]
})
