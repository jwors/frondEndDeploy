<template>
  <a-layout-header class="headerContainer">
    <div class="leftHeader flex items-center cursor-pointer">
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
      <p class="exhibitionNowRoute">
        Dashbord<span class="mx-1">/</span
        >{{ routeHistoryList.getNowExhibition.routeName }}
      </p>
    </div>
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
import { useManangeStore } from "@/store/modules/index";
import { routeHistoryStore } from "@/store/modules/routeHistory";
export default defineComponent({
  name: "Header",
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
  },
  setup() {
    const adminStore = useManangeStore();

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

    // 当前路由栈
    const routeHistoryList = routeHistoryStore();
    return {
      collapsed: ref<boolean>(false),
      adminStore,
      routeHistoryList,
      switchExpansion,
      nowRouteExhition: routeHistoryList.getNowExhibition,
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
.trigger {
  font-size: 18px;
}
.exhibitionNowRoute {
  margin: 0px 20px !important;
}
</style>
