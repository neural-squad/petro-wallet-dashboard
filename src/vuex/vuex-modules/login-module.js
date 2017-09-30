const loginModule = {
  state: {
    loggedIn: false,
    pending: false,
  },

  mutations: {
    LOGIN(state) {
      state.loggedIn = true;
    },
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
    }, credentials) => new Promise((resolve) => {
      commit('LOGIN');
      resolve(credentials);
      // axios.post('/user/login', {
      //   username: credentials.username,
      //   password: credentials.password,
      // }).then((response) => {
      //   const token = response.headers['x-access-token'];
      //   const user = (response && response.data && response.data.data &&
      //     response.data.data.nome ? response.data.data.nome : '');
      //   localStorage.setItem('token', token);
      //   commit('LOGIN_SUCCESS', user);
      //   resolve();
      // }).catch((error) => {
      //   commit('LOGOUT');
      //   reject(error);
      // });
    }),
  },

  getters: {
    isLoggedIn: state => state.isLoggedIn,
  },
};

export default loginModule;
