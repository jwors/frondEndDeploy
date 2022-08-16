<template>
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="() => (collapsed = !collapsed)"
    />
    <menu-fold-outlined
      v-else
      class="trigger"
      @click="() => (collapsed = !collapsed)"
    ></menu-fold-outlined>
  </a-layout-header>
</template>
<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "Header",
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    return {
      collapsed: ref<boolean>(false),
    };
  },
});
</script>
