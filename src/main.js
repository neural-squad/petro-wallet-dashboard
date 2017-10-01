// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'toastr/build/toastr.min.css';

// Fonts
import '@/fonts/fonts.css';

// Core Libs
import Vue from 'vue';

// Externals
import BootstrapVue from 'bootstrap-vue';
import Parse from 'parse';

import App from './App';
import router from './router';
import store from './vuex/store';

Vue.use(BootstrapVue);
Parse.initialize('myAppId');
Parse.serverURL = 'http://ec2-54-236-223-48.compute-1.amazonaws.com:1337/parse';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
