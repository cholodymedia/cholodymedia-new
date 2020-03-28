import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Err from '../views/Error.vue'
import Admin from '../views/Admin.vue'
import Dashboard from '../views/Dashboard.vue'
import axios from 'axios'

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
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {onlylogout: true}
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const onlylogout = to.matched.some(record => record.meta.onlylogout);
  const token = localStorage.getItem("token");
  if(to.name == 'Home' || to.name == 'Blog' || to.name == 'Error' || to.name == 'Admin' || to.name == 'Dashboard') {
    if(requiresAuth) {
      axios.post('https://cholodymedia-analytics.herokuapp.com/checktoken', {
        token
      }).then(() => {
        next();
      }).catch(() => {
        localStorage.removeItem("token")
        next('/admin')
      })
    }else {
      next();
    }
    if(onlylogout) {
      if(token) {
        next('/dashboard');
      }
    }
  } else {
    next('/404');
  }
})

export default router
