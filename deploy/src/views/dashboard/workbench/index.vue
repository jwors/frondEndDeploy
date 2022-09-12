<template>
  <div class="userInfohHeader bg-white h-28 flex justify-between items-center">
    <div class="left">
      <a-avatar :size="60" src="https://joeschmoe.io/api/v1/random" />
      <div class="blessing">
        <p>早安, Vben Admin, 开始您一天的工作吧！</p>
        <p>今日晴，20℃ - 32℃！</p>
      </div>
    </div>
    <ul class="right flex justify-start">
      <li v-for="item in headerRigthItem" :key="item.number">
        <p class="itemName">{{ item.itemName }}</p>
        <p class="itemNumber">{{ item.number }}</p>
      </li>
    </ul>
  </div>
  <div class="allItemContainer mt-5">
    <ProjectCard />
    <LatestDevelopment />
    <QuickNavigation />
    <Statistical />
  </div>
</template>
<script lang="ts" setup>
import ProjectCard from "./components/ProjectCard.vue";
import LatestDevelopment from "./components/latestDevelopment.vue";
import QuickNavigation from "./components/QuickNavigation.vue";
import Statistical from "./components/statistical.vue";
const headerRigthItem = reactive([
  {
    itemName: "待办",
    number: "2/10",
  },
  {
    itemName: "项目",
    number: "8",
  },
  {
    itemName: "团队",
    number: "3000",
  },
]);
</script>
<style lang="less" scoped>
p {
  margin: 0px;
  padding: 0px;
}
.userInfohHeader {
  padding: 0px 40px;
}
.left {
  display: flex;
  align-items: center;
}
.right li:nth-child(2) {
  width: 200px;
  text-align: center;
}
.right li:nth-child(odd) {
  text-align: right;
}
.itemName {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  letter-spacing: 1px;
  margin: 0px;
}
.itemNumber {
  margin: 0px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
}
.blessing {
  margin-left: 20px;
}
.blessing p:nth-child(1) {
  font-size: 18px;
  font-weight: 500;
  font-size: 120x;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 5px;
}
.blessing p:nth-child(2) {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}
.allItemContainer {
  display: grid;
}
</style>
