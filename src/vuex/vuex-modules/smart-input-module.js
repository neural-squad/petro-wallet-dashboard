import Parse from 'parse';

const smartInputModule = {
  state: {
    identification: null,
    transaction: null,
  },

  mutations: {
    SET_IDENTIFICATION(state, identification) {
      state.identification = identification;
    },
    SET_TRANSACTION(state, transaction) {
      state.transaction = transaction;
    },
  },

  actions: {
    setIdentification: ({
        commit,
      }, identification) => Parse.Cloud.run('getClientData', {
        identification,
      })
      .then((success) => {
        commit('SET_IDENTIFICATION', success.attributes);
      }, (error) => {
        throw error.message;
      }),

    sendTransactionToPaymentGateway: ({
      commit,
    }, transaction) => {
      debugger;
      commit('SET_TRANSACTION', transaction);
    },
  },

  getters: {
    identification: state => state.identification,
    transaction: state => state.transaction,
  },
};

export default smartInputModule;
