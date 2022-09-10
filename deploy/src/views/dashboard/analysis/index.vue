<template>
  <div class="blockContainer">
    <BlockData :cardData="item" v-for="item in blockDataList" :key="item.id" />
  </div>
  <div class="echartsContainer rounded-sm bg-white border-spacing-2 mt-4">
    <div class="echartsHeader h-14 flex" @click="changeTab">
      <p
        class="m-0 p-o"
        :data-index="item.id"
        :class="{ chooseP: item.chooseStatus }"
        v-for="item in echartsHeaderList"
        :key="item.id"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import BlockData from "./components/BlockData.vue";
import { BlockDataItem, EchartsHeader } from "../types";
const blockDataList: Array<BlockDataItem> = reactive([
  {
    id: 0,
    dataTitle: "访问数",
    dateType: "月",
    value: 2000,
    total: 120000,
    color: "green",
  },
  {
    id: 1,
    dataTitle: "成交额",
    dateType: "月",
    value: 20000,
    total: 500000,
    color: "blue",
  },
  {
    id: 2,
    dataTitle: "下载数",
    dateType: "周",
    value: 8000,
    total: 120000,
    color: "orange",
  },
  {
    id: 3,
    dataTitle: "成交数",
    dateType: "年",
    value: 5000,
    total: 50000,
    color: "purple",
  },
]);

// echarts node container

const echartsHeaderList: Array<EchartsHeader> = reactive([
  {
    id: 0,
    name: "流量趋势",
    chooseStatus: true,
  },
  {
    id: 1,
    name: "访问量",
    chooseStatus: false,
  },
]);

const changeTab = (e: Event) => {
  const id = e.target?.getAttribute("data-index");
  for (let t = 0; t < echartsHeaderList.length; t++) {
    if (echartsHeaderList[t].id == id) {
      echartsHeaderList[t].chooseStatus = true;
    } else {
      echartsHeaderList[t].chooseStatus = false;
    }
  }
  console.log("test");
};
</script>
<style lang="less" scoped>
.blockContainer {
  display: grid;
  // grid-template-rows: repeat(25%, 4);
  grid-template-columns: repeat(4, 24%);
  justify-content: space-around;
  grid-column-gap: 20px;
  @media (max-width: @screen-moble) {
    display: flex;
    flex-direction: column;
    .dataContainer {
      margin-bottom: 10px;
    }
  }
}
.echartsHeader p {
  line-height: 3.5rem;
  font-size: 16px;
  margin-left: 20px;
  cursor: pointer;
}
.chooseP {
  font-weight: 600px;
  color: #0960bd;
  border-bottom: 2px solid #0960bd;
}
</style>
