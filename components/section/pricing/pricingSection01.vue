<template>
  <div class="pricing">
    <bgBalls :vClass="'pricing'" />
    <div class="pricing__wrap">
      <h4 class="txt_headline6">pricing</h4>
      <div class="txt_headline2"><span>the more your</span> <span>pets walks,</span></div>
      <p class="txt_body2">the more the price drop!</p>
    </div>
  </div>
</template>

<script>
import bgBalls from "@/components/atom/bgBalls.vue";
export default {
  components: { bgBalls },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/section/pricing/pricing01.scss";
</style>
