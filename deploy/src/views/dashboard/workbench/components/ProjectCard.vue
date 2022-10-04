<template>
  <div class="ProjectCard">
    <header>
      <p>项目</p>
      <p>更多</p>
    </header>
    <div class="projectContainer">
      <div v-for="item in projectList" :key="item.iconName" class="item">
        <div class="topHeader">
          <i class="iconfont" :class="[item.iconName]"></i>
          {{ item.projectName }}
        </div>
        <p class="introductory">{{ item.introductory }}</p>
        <footer>
          <span>{{ item.team }}</span>
          <span>{{ item.time }}</span>
        </footer>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const projectList = reactive([
  {
    iconName: "icon-GitHub",
    projectName: "GitHub",
    introductory: "不要等待机会,而要创造机会",
    team: "开源组",
    time: "2022-10-04",
  },
  {
    iconName: "icon-Vue",
    projectName: "Vue",
    introductory: "现在的你决定将来的你",
    team: "算法组",
    time: "2022-10-01",
  },
  {
    iconName: "icon-html",
    projectName: "Html5",
    introductory: "没有什么才能比努力更重要",
    team: "上班摸鱼",
    time: "2022-10-01",
  },
  {
    iconName: "icon-Angular",
    projectName: "Angular",
    introductory: "热情和欲望可以突破一切难关。",
    team: "UI",
    time: "2022-10-01",
  },
  {
    iconName: "icon-React",
    projectName: "React",
    introductory: "健康的身体是实目标的基石",
    team: "技术牛",
    time: "2022-10-01",
  },
  {
    iconName: "icon-JavaScript",
    projectName: "JavaScript",
    introductory: "路是走出来的，而不是空想出来的。",
    team: "架构组",
    time: "2022-10-01",
  },
]);
</script>
<style scoped lang="less">
.ProjectCard {
  background-color: white;
}
header {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
}
header p:first-child {
  font-size: 18px;
}
header p:last-child {
  color: #2a7dc9;
  cursor: pointer;
}
.projectContainer {
  display: grid;
  grid-template-columns: repeat(3, 33.333%);
  grid-template-rows: repeat(2, 150px);
  .topHeader {
    font-size: 20px;
  }
  .iconfont {
    font-size: 28px;
    margin-right: 5px;
  }
}
.item {
  padding: 10px 10px 10px 20px;
  cursor: pointer;
}
.item:hover {
  box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%),
    0 5px 12px 4px rgb(0 0 0 / 9%);
  z-index: 1;
  position: relative;
}
.item:nth-child(1),
.item:nth-child(2) {
  border-right: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;
}
.item:nth-child(3) {
  border-bottom: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;
}
.item:nth-child(4),
.item:nth-child(5) {
  border-right: 1px solid #f0f0f0;
}
.introductory {
  color: rgba(0, 0, 0, 0.45);
  font-size: 15px;
  letter-spacing: 1px;
  margin-bottom: 20px;
}
footer {
  color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: space-between;
}
</style>
