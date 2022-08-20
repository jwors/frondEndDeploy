<template>
  <a-layout-sider
    v-model:collapsed="adminStore.expansion"
    :trigger="null"
    collapsible
  >
    <div class="logo" />
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
          <span>Dashboard</span>
        </template>
        <a-menu-item key="/dashboard/analysis">analysis</a-menu-item>
        <a-menu-item key="/dashboard/workbench">workbench</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import { CodepenCircleOutlined } from "@ant-design/icons-vue";
import { adminManagerPinia } from "@/store/index";
export default defineComponent({
  name: "customMenu",
  components: {
    CodepenCircleOutlined,
  },
  setup() {
    const router = useRouter();

    const adminStore = adminManagerPinia(); // pinia仓库
    // 路由的跳转
    const pushRouter = ({ key }: string): void => {
      let presentFullPath = router.currentRoute.value.fullPath;
      if (presentFullPath != key) {
        router.push(key);
      }
    };
    return {
      pushRouter,
      selectedKeys: ref<string[]>(["/dashboard/analysis"]),
      adminStore,
    };
  },
});
</script>
<style lang="less">
.ant-menu-title-content {
  display: flex;
  align-items: center;
}
</style>
