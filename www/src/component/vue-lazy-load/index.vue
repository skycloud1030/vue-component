<template>
  <div
    :class="$style.default"
    v-observe-visibility="{
      callback: this.visibilityChanged,
      throttle: this.throttle,
    }"
  >
    <slot v-if="isVisible"></slot>
  </div>
</template>

<script>
export default {
  props: {
    throttle: { type: Number, default: 600 },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible;
    },
  },
};
</script>
<style module>
.default {
  min-height: 200px;
  margin-bottom: 8px;
}
</style>
