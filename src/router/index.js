import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '../store'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/servicii',
      name: 'services',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ServiceView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('../views/LoginView.vue')
    // },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: () => import('../views/DashboardView.vue')
    // }
  ]
})

// router.beforeEach((to, from, next) => {
//   const appStore = useAppStore()
//   if(to.name === 'login' || to.name === 'dashboard'){
//     appStore.setNoShow(true)
//   }
//   if(to.name === 'dashboard') {
//     if(appStore.adminLogged === true) {
//       next()
//     } else {
//       next({name: 'login'})
//     }
//   } else {
//     next()
//   }
// })


export default router
