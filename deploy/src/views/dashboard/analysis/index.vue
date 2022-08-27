<template>
  <div class="blockContainer grid grid-cols-4 gap-4">
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
<style lang="less" scoped></style>
