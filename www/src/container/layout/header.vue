<template>
  <a-layout-header :class="$style.header">
    <div>
      <a-button shape="circle" icon="logout" @click="onLogout" />
    </div>
  </a-layout-header>
</template>
<script>
import { Layout, Button } from "ant-design-vue";
export default {
  components: {
    "a-layout-header": Layout.Header,
    "a-button": Button,
  },
  methods: {
    onLogout: function() {
      this.$router.push("/logout");
    },
  },
};
</script>
<style module>
.header {
  text-align: right;
}
@media (max-width: 992px) {
  .header:global.ant-layout-header {
    padding: 0 24px;
  }
}
</style>
