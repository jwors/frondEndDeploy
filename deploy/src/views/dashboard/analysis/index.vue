<template>
  <div class="blockContainer grid grid-cols-4 gap-4">
    <BlockData dataTitle="test" dateType="日" v-for="item in 4" :key="item" />
  </div>
</template>
<script lang="ts" setup>
import BlockData from "./components/BlockData.vue";
</script>
<style lang="less" scoped></style>
