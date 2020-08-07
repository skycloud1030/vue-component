<template>
  <a-row :gutter="32" :class="$style.dashboard">
    <a-col :xs="24" :lg="10" :class="$style.col">
      <a-card :bordered="false">
        <div :class="$style.title">
          Total
        </div>
        <a-row :gutter="0">
          <a-col :xs="24" :lg="12">
            <a-statistic
              title="Subscribes"
              :value="8"
              :class="$style.statistic"
              :valueStyle="{ color: '#f1662f' }"
            />
          </a-col>
          <a-col :xs="24" :lg="12">
            <a-statistic
              title="Going to expired"
              :value="3"
              :class="$style.statistic"
              :valueStyle="{ color: '#a7df40' }"
            />
          </a-col>
        </a-row>
      </a-card>
    </a-col>
    <a-col :xs="24" :lg="14" :class="$style.col">
      <a-card :bordered="false">
        <div :class="$style.title">
          Total
        </div>
        <a-row :gutter="0">
          <a-col :xs="24" :lg="8">
            <a-statistic
              title="Subscribes"
              :value="1"
              :class="$style.statistic"
              :valueStyle="{ color: '#4ec2d1' }"
            />
          </a-col>
          <a-col :xs="24" :lg="8">
            <a-statistic
              title="Going to expired"
              :value="0"
              :class="$style.statistic"
              :valueStyle="{ color: '#a7df40' }"
            />
          </a-col>
          <a-col :xs="24" :lg="8">
            <a-statistic
              title="Active"
              :value="3"
              :class="$style.statistic"
              :valueStyle="{ color: '#f1662f' }"
            />
          </a-col>
        </a-row>
      </a-card>
    </a-col>
    <a-col :xs="24" :xl="10" :class="$style.col">
      <a-card :loading="loading" :bordered="false">
        <chart-package
          :legend="packages.legend"
          :data="packages.data"
        ></chart-package>
      </a-card>
    </a-col>
    <a-col :xs="24" :xl="14" :class="$style.col">
      <a-card :loading="loading" :bordered="false">
        <chart-user :xAxis="user.xAxis" :series="user.series" />
      </a-card>
    </a-col>
  </a-row>
</template>
<script>
import { Card, Row, Col, Statistic } from "ant-design-vue";
import PackageChart from "./chart-package.vue";
import UserChart from "./chart-user.vue";
import _ from "lodash";

export default {
  components: {
    "a-card": Card,
    "a-row": Row,
    "a-col": Col,
    "a-statistic": Statistic,
    "chart-package": PackageChart,
    "chart-user": UserChart,
  },
  data() {
    return {
      packages: {},
      user: {},
      loading: true,
    };
  },
  mounted() {
    this.fet = _.delay(() => {
      this.loading = false;
      this.user = {
        xAxis: ["2018", "2019", "2020"],
        // data: [100, 820, 932],
        series: [
          {
            name: "All",
            type: "line",
            data: [100, 820, 932],
          },
          {
            name: "Active",
            type: "line",
            data: [50, 500, 600],
          },
        ],
      };
      this.packages = {
        legend: ["Trial", "Light", "Enterprise"],
        data: [
          { value: 335, name: "Trial" },
          { value: 310, name: "Light" },
          { value: 234, name: "Enterprise" },
        ],
      };
    }, 500);
  },
  beforeDestroy() {
    this.fet && clearTimeout(this.fet);
  },
};
</script>
<style module>
.dashboard {
  padding: 32px;
}
.dashboard .col {
  margin-bottom: 32px;
}

.dashboard :global .ant-card {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  border-top: 2px solid #424242;
}

.dashboard :global .ant-card-body {
  padding: 17px 16px;
}
.dashboard .title {
  color: #242424;
  font-size: 18px;
  font-weight: 500;
}

.statistic :global .ant-statistic-title {
  font-size: 16px;
  color: #4b4b4b;
  margin-bottom: 12px;
  text-align: center;
}
.statistic :global .ant-statistic-content {
  height: 75px;
  font-size: 64px;
  text-align: center;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
}
</style>
