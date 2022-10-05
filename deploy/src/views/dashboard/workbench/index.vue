<template>
  <div class="userInfohHeader bg-white h-28 flex justify-between items-center">
    <div class="left">
      <a-avatar :size="60" src="https://joeschmoe.io/api/v1/random" />
      <div class="blessing">
        <p>早安, Vben Admin, 开始您一天的工作吧！</p>
        <p>今日晴，20℃ - 32℃！dddd</p>
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
    <ProjectCard class="ProjectCard" />
    <LatestDevelopment class="LatestDevelopment" />
    <QuickNavigation class="QuickNavigation" />
    <Statistical class="Statistical" />
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
.userInfohHeader {
  @media (max-width: @screen-moble) {
    display: inherit;
    padding: 20px 10px;
    height: max-content;
    .left {
      margin-bottom: 10px;
      display: inherit;
      text-align: center;
    }
    .right {
      justify-content: center;
      margin-bottom: 0px;
    }
  }
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
  grid-template-columns: repeat(auto-fill, 180px);
  grid-auto-flow: row dense;
  @media (max-width: @screen-moble) {
    display: inherit;
    .QuickNavigation,
    .Statistical {
      margin-top: 10px;
      margin-left: 0px;
    }
  }
}
.ProjectCard {
  grid-column-start: 1;
  grid-column-end: 10;
  margin-bottom: 10px;
}
.LatestDevelopment {
  grid-column-start: 1;
  grid-column-end: 10;
}
.QuickNavigation {
  grid-column-start: 10;
  grid-column-end: 14;
  margin-left: 10px;
}
.Statistical {
  grid-column-start: 10;
  grid-column-end: 14;
  margin-left: 10px;
}
</style>
