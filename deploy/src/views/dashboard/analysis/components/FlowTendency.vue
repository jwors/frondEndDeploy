<template>
  <div ref="flowChart" class="flowEchartContainer">Flow tendency</div>
</template>
<script lang="ts" setup>
import * as Eacharts from "echarts";
import type { ECBasicOption, EChartsType } from "echarts/types/dist/shared";
import type { Ref } from "vue";
type EChartsOption = echarts.EChartsOption;
const flowChart = ref<HTMLDivElement | null>(null);

const setEchartsOption = shallowRef({}) as Ref<EChartsOption>;
const userEcharts = () => {
  const init = Eacharts.init(flowChart.value as unknown as HTMLElement);

  setEchartsOption.value = {
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "50px",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        axisLine: {
          show: false,
        },
        axisTick: { show: false },
        type: "value",
        show: true,
      },
    ],
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };
  init.setOption(setEchartsOption.value);
};
onMounted(() => {
  userEcharts();
});
</script>
<style lang="less" scoped>
.flowEchartContainer {
  height: 400px;
  width: 100%;
}
</style>
