<template>
  <div class="dataContainer rounded-sm border-1 border-white bg-white">
    <div class="dataHeader">
      <span>{{ dataTitle }}</span>
      <span>{{ dateType }}</span>
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
}
.dataHeader {
  height: 30px;
  line-height: 30px;
}
</style>
