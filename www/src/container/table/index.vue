<template>
  <div>
    <a-table
      v-show="matches"
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
          <a-icon
            type="close-circle"
            :class="$style.deleteIcon"
            theme="filled"
          />
        </a-popconfirm>
      </template>
    </a-table>
    <div v-show="!matches">
      <vue-lazy-load v-for="(item, index) in data" :key="index">
        <a-card :class="$style.card">
          {{ item }}
        </a-card>
      </vue-lazy-load>
    </div>
  </div>
</template>
<script>
import { columns } from "./column.js";
import { Table, Card } from "ant-design-vue";
import { rowClassName } from "../../component/table/rowClassName.js";
import VueLazyLoad from "../../component/vue-lazy-load/index.vue";
import API from "../../actions/api.js";
const api = new API();

export default {
  components: {
    "a-table": Table,
    "a-card": Card,
    "vue-lazy-load": VueLazyLoad,
  },
  data() {
    this.mql = matchMedia(`(min-width: 992px)`);
    return {
      columns,
      data: [],
      loading: false,
      matches: false,
    };
  },
  mounted() {
    this.mql.addListener(this.responsiveHandler);
    this.responsiveHandler(this.mql);
    this.loading = true;
    this.fet = api.getLogs();
    this.fet.then((data) => {
      this.data = data;
      this.loading = false;
    });
  },
  beforeDestroy() {
    this.mql && this.mql.removeListener(this.responsiveHandler);
    this.fet && this.fet.abort();
  },
  methods: {
    rowClassName: rowClassName,
    responsiveHandler(mql) {
      this.matches = mql.matches;
    },
  },
};
</script>
<style module>
.card {
  height: 200px;
}
</style>
