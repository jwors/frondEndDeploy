<template>
  <div ref="traffic" class="trafficEchartContainer">Traffic</div>
</template>
<script lang="ts" setup>
import * as Eacharts from "echarts";
import type { ECBasicOption, EChartsType } from "echarts/types/dist/shared";
import type { Ref } from "vue";
type EChartsOption = echarts.EChartsOption;
const traffic = ref<HTMLDivElement | null>(null);

const setEchartsOption = shallowRef({}) as Ref<EChartsOption>;
const userEcharts = () => {
  const init = Eacharts.init(traffic.value as unknown as HTMLElement);

  setEchartsOption.value = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: function (params: any) {
        let tar;
        if (params[1].value !== "-") {
          tar = params[1];
        } else {
          tar = params[0];
        }
        return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
      },
    },
    legend: {
      data: ["Expenses", "Income"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: (function () {
        let list = [];
        for (let i = 1; i <= 11; i++) {
          list.push("Nov " + i);
        }
        return list;
      })(),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Placeholder",
        type: "bar",
        stack: "Total",
        itemStyle: {
          borderColor: "transparent",
          color: "transparent",
        },
        emphasis: {
          itemStyle: {
            borderColor: "transparent",
            color: "transparent",
          },
        },
        data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292],
      },
      {
        name: "Income",
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        data: [900, 345, 393, "-", "-", 135, 178, 286, "-", "-", "-"],
      },
      {
        name: "Expenses",
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          position: "bottom",
        },
        data: ["-", "-", "-", 108, 154, "-", "-", "-", 119, 361, 203],
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
.trafficEchartContainer {
  height: 400px;
  width: 100%;
}
</style>
