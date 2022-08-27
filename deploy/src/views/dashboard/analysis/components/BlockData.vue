<template>
  <div class="dataContainer rounded-sm border-1 border-white bg-white">
    <div class="dataHeader flex justify-between px-4">
      <span>{{ dataTitle }}</span>
      <span
        class="text-violet-700 px-2 lh leading-2 border-1 bg-violet-300 border-violet-500"
        >{{ dateType }}</span
      >
    </div>
    <div class="dataBottom"></div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  dataTitle: String,
  dateType: String,
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
</style>
