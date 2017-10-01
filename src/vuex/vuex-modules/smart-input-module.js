import Parse from 'parse';

const smartInputModule = {
  state: {
    identification: null,
  },

  mutations: {
    SET_IDENTIFICATION(state, identification) {
      state.identification = identification;
    },
  },

  actions: {
    setIdentification: ({
      commit,
    }, identification) => Parse.Cloud.run('getClientData', { identification })
      .then((success) => {
        console.log(success);
        commit('SET_IDENTIFICATION', identification);
      }, (error) => {
        throw error.message;
      }),
  },

  getters: {
    identification: state => state.identification,
  },
};

export default smartInputModule;
