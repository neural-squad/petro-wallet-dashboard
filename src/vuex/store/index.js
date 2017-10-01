import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import loginModule from '../vuex-modules/login-module';
import smartInputModule from '../vuex-modules/smart-input-module';
import resultModule from '../vuex-modules/result-module';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    loginModule,
    smartInputModule,
    resultModule,
  },
});

export default store;
