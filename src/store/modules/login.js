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
    doLogin({ commit }, { username, password }) {
      doLoginApi(username, password).then(
        (response) => {
          localStorage.token = response.data.token;
          commit("setToken", response.data.token);
        },
        (error) => {
          console.log(error.response.data.error_message);
        }
      );
    },
  },
};

export default login;
