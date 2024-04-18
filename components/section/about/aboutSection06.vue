<template>
  <div class="about">
    <div class="about__bg"></div>
    <div class="about__ball"></div>
    <div class="about__wrap">
      <div class="about__box">
        <h2 class="about__title txt_h1">
          don't board me
          <i class="ico__ball"></i>
        </h2>
        <button
          class="about__btn-booking txt_h6 ani__ball"
          @click="goToBooking"
        >
          <span class="ani__ball-txt">
            <i class="ani__ball-l"></i>
            book now!
            <i class="ani__ball-r"></i>
          </span>
        </button>
      </div>
      <p class="about__txt txt_h5">
        Connects pet owners with a team of experienced and passionate animal
        lovers, ensuring that the highest level of care and attention is
        provided to your furry family member.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "aboutSection06",
  methods: {
    goToBooking() {
      this.$router.push({
        path: "/booking",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/about/aboutCommon.scss";
@import "@/assets/scss/components/section/about/about06.scss";
</style>
