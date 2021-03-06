import Vue from 'vue'
import Router from 'vue-router'
import firebase from '@firebase/app'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // Подкючение страниц Vue проекту для создания динамических переходов
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'main', auth: true},
      component: () => import('./views/Register.vue')
    },
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main', auth: true},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/record',
      name: 'record',
      meta: {layout: 'main', auth: true},
      component: () => import('./views/Record.vue')
    },
    {
      path: '/mykursy',
      name: 'mykursy',
      meta: {layout: 'main', auth: true},
      component: () => import('./views/Mykursy.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      meta: {layout: 'main', auth: true},
      component: () => import('./views/Schedule.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main', auth: true},
      component: () => import('./views/Profile.vue')
    }
  ]
})
//    Проверка авторизации пользователя
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }
})
export default router
