import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import SecondPage from '@/components/SecondPage'
import SecondPageChild from '@/components/SecondPageChild'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/second',
      name: 'SecondPage',
      component: SecondPage,
      // redirect: '/abc'
    },
    {
      path: '/third',
      name: 'SecondPageChild',
      component: SecondPageChild
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log('scrollBehavior', to);
    console.log(from, savedPosition);
    return savedPosition || {x: 0, y: 1000}
  }
})
