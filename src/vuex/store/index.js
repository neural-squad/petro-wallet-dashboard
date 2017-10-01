import Vue from 'vue';
import Vuex from 'vuex';
import loginModule from '../vuex-modules/login-module';
import smartInputModule from '../vuex-modules/smart-input-module';
import resultModule from '../vuex-modules/result-module';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    loginModule,
    smartInputModule,
    resultModule,
  },
});

export default store;
