import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import Index from './views/Index'
const Index2=()=>import('./views/Index2')
const Index3=()=>import('./views/Index3')

const SpotList=()=>import('./views/SpotList')
const SpotDetail=()=>import('./views/SpotDetail')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Main,
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
    {
      path: '/spots',
      name: 'SpotList',
      component: SpotList,
    },
    {
      path: '/spots/1',
      name: 'SpotDetail',
      component: SpotDetail,
    },
  ]
})
