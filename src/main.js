// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import { Layout, Header, Footer, Menu, MenuItem, Sider, Submenu, Breadcrumb, BreadcrumbItem, Icon, Input, Checkbox, Button, Card, Tag } from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.component('Layout', Layout);
Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('Menu', Menu);
Vue.component('MenuItem', MenuItem);
Vue.component('Sider', Sider);
Vue.component('Submenu', Submenu);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('BreadcrumbItem', BreadcrumbItem);
Vue.component('Icon', Icon);
Vue.component('Input', Input);
Vue.component('Checkbox', Checkbox);
Vue.component('Button', Button);
Vue.component('Card', Card);
Vue.component('Tag', Tag);

Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
