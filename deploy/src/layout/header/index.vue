<template>
  <a-layout-header style="background: #fff; padding: 0">
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
