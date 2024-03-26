<template>
  <div class="pricing">
    <div
      class="pricing__card"
      v-for="(pricingInfo, idx) in pricingData"
      :key="idx"
    >
      <h4 class="txt_headline6">{{ pricingInfo.name }}</h4>
      <h2 class="txt_headline2">{{ pricingInfo.price }}<span class="txt_subtitle2">{{ pricingInfo.period }}</span></h2>
      <p class="pricing__txt">{{ pricingInfo.desc }}</p>
      <button class="pricing__btn pricing__btn-try txt_subtitle2">TRY IT!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pricingSection",
  data() {
    return {};
  },
  mounted: {
    pricingData() {
      return this.$store.state.pricingSection.pricingList;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/section/pricing/pricing.scss';
</style>
