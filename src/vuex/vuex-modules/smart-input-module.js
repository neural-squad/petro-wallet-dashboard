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
    }, identification) => new Promise((resolve) => {
      commit('SET_IDENTIFICATION', identification);
      resolve();
    }),
  },

  getters: {
    identification: state => state.identification,
  },
};

export default smartInputModule;
