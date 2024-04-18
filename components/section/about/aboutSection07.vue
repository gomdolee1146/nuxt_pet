<template>
  <div class="about">
    <photoView />
  </div>
</template>

<script>
import photoView from "@/components/atom/photoView.vue";
export default {
  components: { photoView },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/section/about/aboutCommon.scss";
</style>
