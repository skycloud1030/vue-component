<template>
  <a-layout :class="$style.layout">
    <a-layout-sider />
    <a-layout>
      <a-layout-header></a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { Layout } from "ant-design-vue";
import Sider from "./sider.vue";

export default {
  components: {
    "a-layout": Layout,
    "a-layout-content": Layout.Content,
    "a-layout-sider": Sider,
    "a-layout-header": Layout.Header,
  },
};
</script>

<style module>
@media (max-width: 992px) {
  .layout :global .ant-layout-content {
    padding: 20px;
  }
}
</style>
