<template>
  <a-layout-header class="p-0 bg-white">
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
export default defineComponent({
  name: "Header",
  setup() {
    return {
      collapsed: ref<boolean>(false),
    };
  },
});
</script>
