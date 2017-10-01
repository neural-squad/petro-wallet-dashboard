const resultModule = {
  state: {
    balance: '',
  },

  mutations: {
    SET_BALANCE(state, balance) {
      state.balance = balance;
    },
  },

  actions: {
    setBalance: ({
      commit,
    }, balance) => new Promise((resolve) => {
      commit('SET_BALANCE', balance);
      resolve();
    }),

    makeAPurchase: ({
      commit,
    }, purchase) => new Promise((resolve) => {
      resolve(purchase);
    }),

  },

  getters: {
    balance: state => state.balance,
  },
};

export default resultModule;
