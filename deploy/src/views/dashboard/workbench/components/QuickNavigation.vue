<template>
  <div class="QuickNavigation">
    <header>快捷导航</header>
    <div class="navCard" v-for="item in navList" :key="item.navName">
      <i class="iconfont" :class="[item.iconName]"></i>
      <p>{{ item.navName }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const navList = reactive([
  {
    iconName: "icon-shouye",
    navName: "首页",
  },
  {
    iconName: "icon-yibiaopan",
    navName: "分析页",
  },
]);
</script>
