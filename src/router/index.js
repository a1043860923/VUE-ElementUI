import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    chilldren:[
      {
        path: 'menu1',
        component: About,
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
