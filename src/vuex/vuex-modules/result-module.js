import Parse from 'parse';

const resultModule = {
  state: {
    balance: '',
    lastPurchase: '',
  },

  mutations: {
    SET_BALANCE(state, balance) {
      state.balance = balance;
    },
    PURCHASE_SUCCESS(state, purchase) {
      state.lastPurchase = purchase;
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
      }, data) => Parse.Cloud.run('pay', data)
        .then((success) => {
          commit('PURCHASE_SUCCESS', success.attributes);
        }, (error) => {
          throw error.message;
        }),
  },

  getters: {
    balance: state => state.balance,
    lastPurchase: state => state.lastPurchase,
  },
};

export default resultModule;
