<template>
  <div class="blockContainer">
    <BlockData :cardData="item" v-for="item in blockDataList" :key="item.id" />
  </div>
</template>
<script lang="ts" setup>
import BlockData from "./components/BlockData.vue";
import { BlockDataItem } from "../types";
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
</style>
