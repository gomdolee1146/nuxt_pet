<template>
  <div class="themeBlue-theme">
    <navHeader />
    <nuxt />
    <footerBox />
  </div>
</template>

<script>
import navHeader from "@/components/navigation/navHeader.vue";
import footerBox from "@/components/navigation/footerBox.vue";

export default {
  components: { navHeader, footerBox },
};
</script>

<style></style>
