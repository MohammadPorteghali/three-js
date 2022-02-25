<template>
  <div>
    <MainMenu />
    <router-view />
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
export default {
  components: { MainMenu },
};
</script>

<style lang="scss">
@import "src/assets/styles/main.scss";
</style>
