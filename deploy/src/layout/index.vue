<template>
  <a-layout class="h-full">
    <Menu />
    <a-layout>
      <Header />
      <Centent />
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import centent from "@/layout/centent/index.vue";
import header from "@/layout/header/index.vue";
import menu from "@/layout/menu/index.vue";
export default defineComponent({
  components: {
    Centent: centent,
    Header: header,
    Menu: menu,
  },
});
</script>
