<template> </template>

<script>
import AuthService from "../../actions/authService";
import { message } from "ant-design-vue";
const Auth = new AuthService();

export default {
  mounted() {
    Auth.logout();
    localStorage.clear();
    this.$router.push({ name: "login" });
  },
};
</script>

<style module></style>
