<template>
  <c-echart :options="pieOption" autoresize :class="$style.echarts"></c-echart>
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
    data: { type: Array, default: () => [] },
    legend: { type: Array, default: () => [] },
  },
  data() {
    return {
      isMount: false,
    };
  },
  computed: {
    pieOption: function() {
      if (this.isMount) {
        return {
          ...initOptions,
          legend: {
            orient: "horizontal",
            bottom: 0,
            data: this.legend,
          },
          series: [
            {
              name: "Package",
              type: "pie",
              hoverAnimation: false,
              silent: true,
              center: ["50%", "50%"],
              radius: ["40%", "60%"],
              label: {
                show: true,
                formatter: function({ name, percent, value }) {
                  return `${name}\n${numeral(value).format(
                    "0.[00] a"
                  )} (${percent}%)`;
                },
              },
              data: this.data,
            },
          ],
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
