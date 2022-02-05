import {createRouter, RouteRecordRaw, Router, createWebHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
   path: '/',
   name: 'Index',
   component: () => import('@/components/index.vue'),
   meta: {
    title: '首页'
   }
  }
 ]

 const router: Router = createRouter({
  history: createWebHistory(),
  routes
 })

 export default router
