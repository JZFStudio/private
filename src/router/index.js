import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Index from '@/pages/content/Index'
import Base from '@/pages/content/Base'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

import utils from '../libs/utils'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
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
          path: 'base',
          name: 'Base',
          component: Base
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
  if ((to.path === '/login') || !(to.meta && to.meta.check) || utils.checkLogin()) {
    next();
  } else {
    next({path: '/login'});
  }
})

export default router
