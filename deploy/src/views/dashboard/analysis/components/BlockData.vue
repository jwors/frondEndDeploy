<template>
  <div class="dataContainer rounded-sm border-1 border-white bg-white">
    <div class="dataHeader flex justify-between px-4">
      <span cla>{{ cardData.dataTitle }}</span>
      <span
        class="text-violet-700 px-2 lh leading-2 border-1 bg-violet-300 border-violet-500"
        >{{ cardData.dateType }}</span
      >
    </div>
    <div class="dataBottom">
      <div class="flex justify-between">
        <p class="text-2xl">${{ cardData.value }}</p>
        <p>icon</p>
      </div>
      <div class="flex justify-between">
        <p>总访问数</p>
        <p>${{ cardData.total }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
interface BlockDataItem {
  id: number;
  dataTitle: string;
  dateType: string;
  total: number;
  color: string;
  value: number;
}

// 用于在用运行时 props 声明时给一个 prop 标注更复杂的类型定义
defineProps({
  cardData: {
    type: Object as PropType<BlockDataItem>,
    required: true,
  },
});
</script>
<style lang="less" scoped>
.dataContainer {
  width: 100%;
  height: 220px;
}
.dataHeader {
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #e5e7eb;
}
.dataBottom {
  height: calc(100% - 35px);
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
