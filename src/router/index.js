import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Err from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/404',
    name: 'Error',
    component: Err
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name == 'Home' || to.name == 'Blog' || to.name == 'Error') {
    next();
  } else {
    next('/404');
  }
})

export default router
