import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Index from '@/pages/content/Index'
import Dev from '@/pages/content/Dev'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

import utils from '../libs/utils'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      meta: {
        check: true
      },
      component: Home,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: Index
        },
        {
          path: 'dev',
          name: 'Dev',
          component: Dev
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: {},
      component: Login
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

router.beforeEach(function(to, from, next) {
  console.log('beforeEach');
  if ((to.path === '/login') || !(to.meta && to.meta.check) || utils.checkLogin()) {
    next();
  } else {
    next({path: '/login'});
  }
  if (to.path === '/') {
    next({path: '/home/index'});
  }
})

export default router
