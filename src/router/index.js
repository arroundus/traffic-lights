import Vue from 'vue'
import VueRouter from 'vue-router'
import Red from '@/views/red.vue'
import Yellow from '@/views/yellow'
import Green from '@/views/green'

Vue.use(VueRouter)

const routes = [
  {
    path: '/red',
    name: 'red',
    component: Red
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: Yellow
  },
  {
    path: '/green',
    name: 'green',
    component: Green
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (from.name) {
    sessionStorage.removeItem('time')
  }
  next()
})

export default router
