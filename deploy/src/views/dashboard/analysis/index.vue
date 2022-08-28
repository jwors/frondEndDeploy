<template>
  <div class="blockContainer">
    <BlockData
      :dataTitle="item.dataTitle"
      :dateType="item.dateType"
      v-for="item in blockDataList"
      :key="item.id"
    />
  </div>
</template>
<script lang="ts" setup>
import BlockData from "./components/BlockData.vue";
interface blockDataItem {
  id: number;
  dataTitle: string;
  dateType: string;
}
const blockDataList: Array<blockDataItem> = reactive([
  {
    id: 0,
    dataTitle: "访问数",
    dateType: "月",
  },
  {
    id: 0,
    dataTitle: "成交额",
    dateType: "月",
  },
  {
    id: 0,
    dataTitle: "下载数",
    dateType: "周",
  },
  {
    id: 0,
    dataTitle: "成交数",
    dateType: "年",
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
