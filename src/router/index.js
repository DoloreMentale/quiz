import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/quiz'
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('@/views/Quiz')
  },
  {
    path: '/quiz/result',
    name: 'Result',
    component: () => import('@/views/Result')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
