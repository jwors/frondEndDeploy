<template>
  <a-layout class="h-full">
    <Menu />
    <a-layout>
      <Header />
      <div class="pageContainer">
        <Centent />
      </div>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import centent from "@/layout/centent/index.vue";
import header from "@/layout/header/index.vue";
import menu from "@/layout/menu/index.vue";
export default defineComponent({
  components: {
    Centent: centent,
    Header: header,
    Menu: menu,
  },
});
</script>
<style lang="less" scoped>
.pageContainer {
  height: calc(100% - 48px);
  padding: 10px;
}
</style>
