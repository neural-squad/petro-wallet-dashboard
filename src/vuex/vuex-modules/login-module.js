import Parse from 'parse';

const loginModule = {
  state: {
    isLoggedIn: false,
    pending: false,
    user: Object,
  },

  mutations: {
    LOGIN_SUCCESS(state, user) {
      state.isLoggedIn = true;
      state.pending = false;
      state.user = user;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
    },
  },

  actions: {
    login: ({
        commit,
      }, credentials) => Parse.User.logIn(credentials.username, credentials.password)
      .then((success) => {
        commit('LOGIN_SUCCESS', success.attributes);
      }, (error) => {
        commit('LOGOUT');
        throw error.message;
      }),
  },

  getters: {
    isLoggedIn: state => state.isLoggedIn,
  },
};

export default loginModule;
