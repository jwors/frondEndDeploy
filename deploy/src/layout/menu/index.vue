<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <user-outlined />
          <span>Dashboard</span>
        </template>
        <a-menu-item key="1">analysis</a-menu-item>
        <a-menu-item key="2">workbench</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import { UserOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "customMenu",
  components: {
    UserOutlined,
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
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
