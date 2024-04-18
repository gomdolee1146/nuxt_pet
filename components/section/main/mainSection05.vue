<template>
  <div class="themeBlue-theme">
    <div class="main">
      <div class="main__txt">
        <div class="main__bg">
          <div class="ico__ball" 
            v-for="(ball, idx) in 6"
            :class="`ico__ball${idx}`"
            :key="idx"
          ></div>
        </div>
        <h5 class="main__desc txt_h5">book your consult</h5>
        <div class="ico_box">
          <i class="ico__arrow-down"></i>
        </div>
        <h1 class="main__title txt_h1">HAVE QUESTION?</h1>
        <h3 class="main__contact txt_h3">
          <p>contact us at</p>
          <span>858-449-2691.</span>
        </h3>
        <button class="main__btn-book ani__ball">
          <span class="ani__ball-txt">
            <i class="ani__ball-l"></i>
            Book now
            <i class="ani__ball-r"></i>
          </span>
        </button>
      </div>
      <div class="main__content">
        <div class="main__content_title">
          <div class="ico_box">
            <i class="ico__bone"></i>
          </div>
          <h3 class="txt_h3">Cost of walking</h3>
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
