<template>
  <div>
    <h1>Login</h1>
    <div>
      <label>Username:</label>
      <input type="text" v-model="username" />
    </div>
    <div>
      <label>password:</label>
      <input type="password" autocomplete="new-password" v-model="password" />
    </div>
    <button @click="handleDoLogin(username, password)">Login</button>
  </div>
</template>

<script>
import { doLoginApi } from "../../services/api";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      username: "thiago",
      password: "123456"
    };
  },

  methods: {
    ...mapActions("login", ["doLogin"]),

    handleDoLogin(username, password) {
      this.doLogin({ username, password });
    },

    redirectToList() {
      this.$router.push({ name: "listTaskgroup" });
    }
  },

  watch: {
    getToken(newToken) {
      if (newToken) {
        this.redirectToList();
      }
    }
  },

  computed: {
    ...mapGetters("login", ["getToken"])
  }
};
</script>

<style></style>
