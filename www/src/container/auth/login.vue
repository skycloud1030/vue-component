<template>
  <div :class="$style.login" @keyup.enter="onLogin">
    <div :class="$style.logo">
      <a-icon type="github" />
    </div>
    <h1 :class="$style.header">
      Sign in to Vue Components
    </h1>
    <a-card :class="$style.container">
      <div>
        <label>
          Username or email address
        </label>
        <a-input v-model="username" placeholder="root" :class="$style.input">
          <a-icon slot="prefix" type="user" />
        </a-input>
      </div>
      <div>
        <label>Password</label>
        <a-input-password
          v-model="password"
          placeholder="root"
          :class="$style.input"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input-password>
      </div>
      <div>
        <a-button
          :class="$style.button"
          block
          @click="onLogin"
          size="large"
          :loading="loading"
        >
          Sign in
        </a-button>
      </div>
    </a-card>
  </div>
</template>
<script>
import AuthService from "../../actions/authService";
import { Card, Input, Button, Icon } from "ant-design-vue";
import { message } from "ant-design-vue";
import _ from "lodash";

const Auth = new AuthService();

export default {
  data() {
    return {
      username: "",
      password: "",
      loading: false,
    };
  },
  components: {
    "a-card": Card,
    "a-input": Input,
    "a-button": Button,
    "a-input-password": Input.Password,
    "a-icon": Icon,
  },
  methods: {
    onLogin: function() {
      this.loading = true;
      Auth.login(this.username, this.password)
        .then(() => {
          _.delay(() => {
            localStorage.setItem("username", this.username);
            this.$router.push("/");
          }, 800);
        })
        .catch((err) => {
          this.loading = false;
          message.error(err.message);
        });
    },
  },
};
</script>
<style module>
.login {
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
}
.logo {
  padding-bottom: 24px;
  color: #333;
  margin-top: 32px;
}

.logo i {
  font-size: 48px;
}
.login .header {
  margin-bottom: 15px;
  color: #333;
}
.container {
  width: 340px;
  min-height: 240px;
  color: #24292e;
}
.container label {
  font-weight: 600;
}

.container .input {
  margin-top: 5px;
  margin-bottom: 15px;
}

.container .input i {
  color: rgba(0, 0, 0, 0.25);
}

.container .button {
  background-color: #2a8f47;
  margin-top: 20px;
  color: #fff;
}
.container .button:hover,
.container .button:active,
.container .button:focus {
  background-color: #2a8f47;
  color: #fff;
}

@media (max-width: 576px) {
  .container {
    width: 80%;
  }
}
</style>
