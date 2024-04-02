<template>
  <div class="themeBlue-theme">
    <div class="main">
      <div class="main__txt">
        <h5 class="main__desc txt_headline5">book your consult</h5>
        <div class="ico_box">
          <i class="ico__arrow-down"></i>
        </div>
        <h1 class="main__title txt_headline1">HAVE QUESTION?</h1>
        <h3 class="main__contact txt_headline3"><p>contact us at</p> <span>858-449-2691.</span></h3>
        <button class="main__btn-book">Book now</button>
      </div>
      <div class="main__content">
        <div class="main__content_title">
          <div class="ico_box">
            <i class="ico__bone"></i>
          </div>
          <h3 class="txt_headline3">Cost of walking</h3>
        </div>
        <div class="main__content_box">
          <pricingCard :isShowLast="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pricingCard from "@/components/section/pricing/pricingCard.vue";

export default {
  name: "mainSection05",
  components: { pricingCard },
  data() {
    return {};
  },
  methods: {
    goToPricing() {
      this.$router.push({
        path: "/pricing",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/main/mainCommon.scss";
@import "@/assets/scss/components/section/main/main05.scss";
</style>
