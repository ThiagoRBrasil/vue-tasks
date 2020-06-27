import { doLoginApi } from "../../services/api";

const login = {
  namespaced: true,
  state: {
    token: "",
  },
  getters: {
    getToken: (state) => state.token,
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
  },
  actions: {
    async doLogin({ commit }, { username, password }) {
      try {
        const response = await doLoginApi(username, password);
        const {
          data: { token },
        } = response;
        localStorage.token = token;
        commit("setToken", token);
      } catch (error) {
        console.log(error.response.data.error_message);
      }
    },
  },
};

export default login;
