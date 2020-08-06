<template>
  <a-layout-sider :class="$style.sider" :width="150">
    <div :class="$style.logo">
      <a-icon type="code-sandbox" :class="$style.icon" />
      <h1>Vue</h1>
    </div>
    <a-menu
      @click="onSelect"
      :selectedKeys="[selectedKeys]"
      :class="$style.menu"
    >
      <a-menu-item key="table">
        <a-icon type="table" />
        <span>Table</span>
      </a-menu-item>
      <a-menu-item key="dashboard">
        <a-icon type="dashboard" />
        <span>Dasboard</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { Layout } from "ant-design-vue";
import { Icon } from "ant-design-vue";
import { Menu } from "ant-design-vue";

export default {
  data() {
    return {
      selectedKeys: "",
    };
  },
  components: {
    "a-layout-sider": Layout.Sider,
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-icon": Icon,
  },
  computed: {
    defaultKey: function() {
      return this.$route.meta.name || "";
    },
    defaultCollapsed: function() {
      return window.innerWidth < 992;
    },
  },
  watch: {
    defaultKey: {
      immediate: true,
      handler(newValue) {
        this.selectedKeys = newValue;
      },
    },
  },

  methods: {
    onSelect({ key }) {
      this.selectedKeys = key;
      this.$router.push({ name: key });
    },
  },
};
</script>
<style module>
.sider:global.ant-layout-sider {
  background: #fff;
}
.menu:global.ant-menu {
  margin-right: -1px;
}

.logo {
  position: relative;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  background: white;
  box-shadow: 1px 1px 0 0 #e8e8e8;
  transition: all 0.3s;
}
.logo .icon {
  display: inline-block;
  height: 32px;
  font-size: 32px;
  vertical-align: middle;
  color: #1890ff;
}
.logo h1 {
  display: inline-block;
  margin: 0 0 0 12px;
  font-weight: 600;
  font-size: 20px;
  vertical-align: middle;
  color: rgba(0, 0, 0, 0.65);
}
</style>
