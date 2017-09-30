import Vue from 'vue';
import Vuex from 'vuex';
import loginModule from '../vuex-modules/login-module';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    loginModule,
  },
});

export default store;
