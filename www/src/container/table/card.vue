<template>
  <a-card :class="$style.rowCard">
    <a-card-meta
      :title="time"
      :description="data.name"
      :style="{ marginBottom: '24px' }"
    >
      <a-avatar
        slot="avatar"
        size="large"
        :style="{ backgroundColor: color }"
        >{{ data.level }}</a-avatar
      >
    </a-card-meta>
    <div :style="{ marginBottom: '24px' }">
      <a-tag color="blue">{{ data.catalog }}</a-tag>
    </div>
    <div :class="$style.content">
      <span :title="data.content">{{ data.content }}</span>
    </div>
  </a-card>
</template>
>
<script>
import { Card, Avatar, Tag } from "ant-design-vue";
import severity from "../../actions/severity.js";
import dayjs from "dayjs";

export default {
  props: {
    data: { type: Object, default: () => ({}) },
  },
  components: {
    "a-card": Card,
    "a-card-meta": Card.Meta,
    "a-avatar": Avatar,
    "a-tag": Tag,
  },
  computed: {
    time: function() {
      return dayjs(this.data.time).format("MM-DD HH:mm:ss");
    },
    color: function() {
      const { color } = severity(this.data.level);
      return color;
    },
  },
};
</script>
<style module>
.capitalize {
  text-transform: capitalize;
}

.rowCard {
  height: 240px;
  overflow: hidden;
}

@media screen and (max-width: 992px) {
  .result :global .ant-card-body {
    padding: 0px;
  }
  .rowCard :global .ant-card-body {
    padding: 24px;
  }
  .result :global .ant-card-loading-content {
    padding: 24px;
  }
}
</style>
