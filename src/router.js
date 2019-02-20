import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/attending',
      name: 'attending',
      component: () => import('./views/attending.vue')
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('./views/speakers.vue')
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: () => import('./views/agenda.vue')
    },
    {
      path: '/teams',
      name: 'teams',
      component: () => import('./views/teams.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
