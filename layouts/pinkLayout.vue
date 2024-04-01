<template>
  <transition name="fade">
    <div class="themePink-theme">
      <navHeader />
      <nuxt />
      <footerBox />
    </div>
  </transition>
</template>

<script>
import navHeader from "@/components/navigation/navHeader.vue";
import footerBox from "@/components/navigation/footerBox.vue";

export default {
  components: { navHeader, footerBox },
};
</script>

<style></style>
