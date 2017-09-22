import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Main'
import Index from './views/Index'
const Index2=()=>import('./views/Index2')
const Index3=()=>import('./views/Index3')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: Index
        },
        {
          path: 'index2',
          name: 'Index2',
          component: Index2
        },
        {
          path: 'index3',
          name: 'Index3',
          component: Index3
        },
      ]
    },

  ]
})
