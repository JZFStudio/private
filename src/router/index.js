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
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: Index
        },
        {
          path: 'dev/:id',
          name: 'Dev',
          component: Dev
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
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
  if ((to.path === '/login') || utils.checkLogin()) {
    next();
  } else {
    next({path: '/login'});
  }
  if (to.path === '/') {
    next({path: '/index'});
  }
})

export default router
