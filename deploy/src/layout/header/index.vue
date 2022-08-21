<template>
  <a-layout-header class="headerContainer">
    <menu-unfold-outlined
      v-if="adminStore.expansion"
      class="trigger"
      @click="switchExpansion(true)"
    />
    <menu-fold-outlined
      v-else
      class="trigger"
      @click="switchExpansion(false)"
    ></menu-fold-outlined>
    <a-avatar src="https://joeschmoe.io/api/v1/random" />
  </a-layout-header>
</template>
<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { adminManagerPinia } from "@/store/index";
export default defineComponent({
  name: "Header",
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    const adminStore = adminManagerPinia();

    // 展开或者收缩
    const switchExpansion = (status: boolean): void => {
      adminStore.changeExpansion();
    };
    return {
      collapsed: ref<boolean>(false),
      adminStore,
      switchExpansion,
    };
  },
});
</script>
<style lang="less" scoped>
.headerContainer {
  background: #fff;
  padding: 0px 20px;
  height: 48px;
  line-height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
