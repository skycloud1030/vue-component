<template>
  <div>
    <vue-table :data="data" v-if="matches" :loading="loading" />
    <vue-list :data="data" v-if="!matches" />
  </div>
</template>
<script>
import { rowClassName } from "../../component/table/rowClassName.js";
import VueTable from "./table.vue";
import VueList from "./list.vue";
import API from "../../actions/api.js";
const api = new API();

export default {
  components: {
    "vue-table": VueTable,
    "vue-list": VueList,
  },
  data() {
    this.mql = matchMedia(`(min-width: 992px)`);
    return {
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
    this.fet.then(({ data }) => {
      this.data = data;
      this.loading = false;
    });
  },
  beforeDestroy() {
    this.mql && this.mql.removeListener(this.responsiveHandler);
    this.fet && this.fet.abort();
  },
  methods: {
    responsiveHandler(mql) {
      this.matches = mql.matches;
    },
  },
};
</script>
<style module></style>
