<template>
  <div class="LatestDevelopment">
    <header>
      <p>最新动态</p>
      <p>更多</p>
    </header>
  </div>
</template>
<style lang="less" scoped>
.LatestDevelopment {
  background: white;
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
</style>
