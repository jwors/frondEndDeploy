<template>
  <div class="QuickNavigation">
    <header>快捷导航</header>
    <div class="navContainer">
      <div class="navCard" v-for="item in navList" :key="item.navName">
        <i class="iconfont" :class="[item.iconName]"></i>
        <p>{{ item.navName }}</p>
      </div>
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
  {
    iconName: "icon-sharpicons_crop",
    navName: "探索",
  },
]);
</script>
<style lang="less" scoped>
header {
  height: 50px;
  line-height: 50px;
  background-color: white;
  padding: 0px 15px;
  font-size: 18px;
}
.navContainer {
  display: grid;
  grid-template-columns: repeat(3, 33.333%);
  grid-template-rows: repeat(1, 150px);
  align-items: center;
  justify-items: center;
}
.navCard {
  background: white;
  padding: 10px 10px 10px 20px;
  border-top: 1px solid #f0f0f0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  i {
    font-size: 28px;
    text-align: center;
  }
}
.navCard:nth-child(1),
.navCard:nth-child(2) {
  border-right: 1px solid #f0f0f0;
}
</style>
