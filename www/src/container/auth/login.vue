<template>
  <div>
    Login
  </div>
</template>
<script>
import AuthService from "../../actions/authService";
const Auth = new AuthService();

export default {
  mounted() {
    Auth.login("111", "111").then(() => {
      console.log("ok");
    });
  },
};
</script>
<style module></style>
