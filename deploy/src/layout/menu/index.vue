<template>
  <div
    :class="addCustomSiderClass && 'custom-sider-container'"
    style="height: 100%"
    @click.stop="hiddenSider"
  >
    <a-layout-sider
      breakpoint="sm"
      collapsed-width="0"
      v-model:collapsed="adminStore.expansion"
      :trigger="null"
      @click.stop="stopEventBubbing"
      :class="uesPointClass && 'custom-sider'"
      style="height: 100%"
      @breakpoint="onBreakpoint"
      collapsible
    >
      <div :class="adminStore.expansion ? 'expansionStatus' : 'logo'">
        {{ adminStore.expansion ? "C_" : "C_lOGIN" }}
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        @click.stop="pushRouter"
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
  </div>
</template>
<script lang="ts">
import { CodepenCircleOutlined } from "@ant-design/icons-vue";
import { adminManagerPinia } from "@/store/modules/index";
// interface RouterItem {
//   item?: Object;
//   key: string;
//   keyPath?: any;
// }
export default defineComponent({
  name: "customMenu",
  components: {
    CodepenCircleOutlined,
  },
  setup() {
    const router = useRouter();

    const adminStore = adminManagerPinia(); // pinia仓库
    // 路由的跳转
    const pushRouter = (item) => {
      console.log("test");

      let presentFullPath = router.currentRoute.value.fullPath;
      if (presentFullPath != item.key) {
        router.push(item.key);
      }
    };
    // 屏幕断点 表示当前是小屏幕
    let uesPointClass = ref<boolean>(false);
    const onBreakpoint = (broken: boolean) => {
      uesPointClass.value = broken;
    };

    // 收起来 sider
    const hiddenSider = () => {
      adminStore.expansion = true;
    };

    // 当小屏幕 并且 sider 展开的时候 添加阴影css 反之没有
    const addCustomSiderClass = computed(() => {
      if (uesPointClass.value && adminStore.expansion == false) {
        return true;
      } else {
        return false;
      }
    });

    // 阻止事件冒泡
    const stopEventBubbing = () => {};
    return {
      pushRouter,
      selectedKeys: ref<string[]>(["/dashboard/analysis"]),
      adminStore,
      onBreakpoint,
      uesPointClass,
      hiddenSider,
      addCustomSiderClass,
      stopEventBubbing,
    };
  },
});
</script>
<style lang="less" scoped>
.custom-sider-container {
  background-color: rgba(0, 0, 0, 0.45);
  position: absolute;
  width: 100%;
  // overflow: hidden;
}
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
  transform: translateX(0px);
  z-index: 999;
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
