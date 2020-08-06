<template>
  <RecycleScroller
    :items="data"
    :item-size="rowHeight"
    key-field="key"
    v-slot="{ item }"
  >
    <c-card :data="item" />
  </RecycleScroller>
</template>
<script>
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import Card from "./card.vue";

export default {
  props: {
    data: { type: Array, default: () => [] },
    rowHeight: { type: Number, default: 250 },
  },
  components: {
    RecycleScroller: RecycleScroller,
    "c-card": Card,
  },
};
</script>
<style module></style>
