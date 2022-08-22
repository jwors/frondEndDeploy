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
    <div>
      <fullscreen-outlined
        class="mr-5 text-xl cursor-pointer"
        @click="toggleScreen"
        v-show="!screenStatus"
      />
      <fullscreen-exit-outlined
        class="mr-5 text-xl cursor-pointer"
        @click="toggleScreen"
        v-show="screenStatus"
      />
      <a-avatar src="https://joeschmoe.io/api/v1/random" />
    </div>
  </a-layout-header>
</template>
<script lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons-vue";
import screenfull from "screenfull";
import { adminManagerPinia } from "@/store/index";
export default defineComponent({
  name: "Header",
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
  },
  setup() {
    const adminStore = adminManagerPinia();

    // 展开或者收缩
    const switchExpansion = (status: boolean): void => {
      adminStore.changeExpansion();
    };

    // shrink
    let screenStatus = ref<boolean>(false); // false 小   true 大
    const toggleScreen = () => {
      screenStatus.value = !screenStatus.value;
      screenfull.toggle();
    };
    return {
      collapsed: ref<boolean>(false),
      adminStore,
      switchExpansion,
      toggleScreen,
      screenStatus,
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
