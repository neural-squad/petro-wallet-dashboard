import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Homepage',
    component: Homepage,
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  }],
});
