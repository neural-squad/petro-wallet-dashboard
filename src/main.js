// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Fonts
import '@/fonts/fonts.css';

// Core Libs
import Vue from 'vue';

// Externals
import BootstrapVue from 'bootstrap-vue';

import App from './App';
import router from './router';
import store from './vuex/store';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
