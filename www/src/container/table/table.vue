<template>
  <a-table
    rowKey="key"
    size="middle"
    :columns="columns"
    :data-source="data"
    :rowClassName="rowClassName"
    :loading="loading"
    :pagination="{ hideOnSinglePage: true }"
    :scroll="{ y: 400 }"
    bordered
  >
    <span slot="times" slot-scope="text">
      {{ text }}
    </span>
    <template slot="operation" slot-scope="text, record">
      <a-popconfirm
        v-if="record && record.auth_type == 'user'"
        title="Sure to delete?"
        @confirm="() => onDelete(record)"
      >
        <a-icon type="close-circle" :class="$style.deleteIcon" theme="filled" />
      </a-popconfirm>
    </template>
  </a-table>
</template>
<script>
import { columns } from "./column.js";
import { Table } from "ant-design-vue";
import { rowClassName } from "../../component/table/rowClassName.js";

export default {
  props: {
    data: { type: Array, default: () => [] },
    loading: { type: Boolean, defautl: false },
  },
  components: {
    "a-table": Table,
  },
  data() {
    return {
      columns,
    };
  },
  methods: {
    rowClassName: rowClassName,
  },
};
</script>
