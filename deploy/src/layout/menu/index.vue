<template>
  <a-layout-sider
    breakpoint="sm"
    collapsed-width="0"
    v-model:collapsed="adminStore.expansion"
    :trigger="null"
    :class="uesPointClass && 'custom-sider'"
    @breakpoint="onBreakpoint"
    collapsible
  >
    <div :class="adminStore.expansion ? 'expansionStatus' : 'logo'">
      {{ adminStore.expansion ? "C_" : "C_lOGIN" }}
    </div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      @click="pushRouter"
      theme="dark"
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <codepen-circle-outlined />
          <span class="routeName">Dashboard</span>
        </template>
        <a-menu-item key="/dashboard/analysis">分析页</a-menu-item>
        <a-menu-item key="/dashboard/workbench">工作台</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import { CodepenCircleOutlined } from "@ant-design/icons-vue";
import { adminManagerPinia } from "@/store/modules/index";
interface RouterItem {
  item?: Object;
  key: string;
  keyPath?: any;
}
export default defineComponent({
  name: "customMenu",
  components: {
    CodepenCircleOutlined,
  },
  setup() {
    const router = useRouter();

    const adminStore = adminManagerPinia(); // pinia仓库
    // 路由的跳转
    const pushRouter = (item: RouterItem): void => {
      let presentFullPath = router.currentRoute.value.fullPath;
      if (presentFullPath != item.key) {
        router.push(item.key);
      }
    };
    // 屏幕断点
    let uesPointClass = ref<boolean>(false);
    const onBreakpoint = (broken: boolean) => {
      uesPointClass.value = true;
    };
    return {
      pushRouter,
      selectedKeys: ref<string[]>(["/dashboard/analysis"]),
      adminStore,
      onBreakpoint,
      uesPointClass,
    };
  },
});
</script>
<style lang="less" scoped>
.ant-menu-title-content {
  display: flex;
  align-items: center;
}
.expansionStatus,
.logo {
  color: white;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
}
.routeName {
  vertical-align: sub;
}

.custom-sider {
  position: fixed;
  top: 0;
  left: 0px;
  height: 100%;
  transform: translateX(0px);
}

// .expand {
//   @media (max-width: @screen-moble) {
//     animation: expandNode 0.8s linear;
//     transform: translateX(0px);
//   }
// }

// @keyframes expandNode {
//   from {
//     transform: translateX(-80px);
//   }
//   to {
//     transform: translateX(0px);
//   }
// }

// .hidden {
//   @media (max-width: @screen-moble) {
//     animation: hiddenNode 1s linear 1;
//     transform: translateX(-80px);
//   }
// }
// @keyframes hiddenNode {
//   from {
//     transform: translateX(0px);
//   }
//   to {
//     transform: translateX(-80px);
//   }
// }
</style>
