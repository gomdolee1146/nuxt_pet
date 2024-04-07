<template>
  <div class="main">
    <div class="main__txt">found us here</div>
    <photoView />
  </div>
</template>

<script>
import photoView from "@/components/atom/photoView.vue";
export default {
  name: "mainSection06",
  components: { photoView },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/section/main/mainCommon.scss";
.main {
  padding-top: 12vh;
}
</style>