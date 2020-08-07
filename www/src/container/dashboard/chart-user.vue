<template>
  <c-echart :options="lineOption" autoresize :class="$style.echarts"></c-echart>
</template>
<script>
import ECharts from "vue-echarts";
import numeral from "numeral";
import { initOptions } from "../../component/charts/index.js";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/component/legend";

export default {
  components: {
    "c-echart": ECharts,
  },
  props: {
    series: { type: Array, default: () => [] },
    xAxis: { type: Array, default: () => [] },
  },
  data() {
    return {
      isMount: false,
    };
  },
  computed: {
    lineOption: function() {
      if (this.isMount) {
        return {
          ...initOptions,
          xAxis: {
            // boundaryGap: false,
            type: "category",
            data: this.xAxis,
          },
          yAxis: {
            type: "value",
          },
          series: this.series,
          // series: [
          //   {
          //     name: "User",
          //     type: "line",
          //     data: this.data,
          //   },
          // ],
        };
      }
    },
  },
  mounted() {
    this.isMount = true;
  },
};
</script>
<style module>
.echarts {
  width: 100%;
  height: 300px;
}
</style>
