<template>
  <a-result
    status="warning"
    title="Sorry, the page you visited does not exist."
  >
    <template v-slot:extra>
      <a-button type="primary" @click="onClick">Back Home</a-button>
    </template>
  </a-result>
</template>
<script>
import { Result, Button } from "ant-design-vue";
export default {
  components: {
    "a-result": Result,
    "a-button": Button
  },
  methods: {
    onClick: function() {
      this.$router.push("/");
    }
  }
};
</script>
