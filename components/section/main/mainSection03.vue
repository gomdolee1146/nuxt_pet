<template>
  <div class="main">
    <div class="main__title txt_h1">HOW IT WORKS?</div>
    <div class="main__bg">
      <div
        class="main__num txt_h7"
        v-for="(steps, idx) in aboutSteps"
        :key="idx"
      >
        {{ steps.num }}
      </div>
    </div>
    <div class="main__card_wrap">
      <div class="main__card" v-for="(steps, idx) in aboutSteps" :key="idx">
        <div class="main__card_title txt_h4">{{ steps.title }}</div>
        <div class="main__card_num txt_h4">{{ steps.num }}.</div>
        <div class="main__card_desc txt_h9">{{ steps.desc }}</div>
        <div class="main__card_thumb">
          <img :src="require(`~/assets/imgs/about/about_step${steps.num}.png`)" />
        </div>
      </div>
    </div>
    <div class="main__desc txt_h8">
      just fill out the form, <br /> and we'll be happy to assist you with your pet.
    </div>
    <button class="main__btn-book ani__ball">
      <span class="ani__ball-txt">
          <i class="ani__ball-l"></i>
          TRY IT!
          <i class="ani__ball-r"></i>
        </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "mainSection03",
  data() {
    return {};
  },
  computed: {
    aboutSteps() {
      return this.$store.state.aboutSection.aboutSteps;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/main/mainCommon.scss";
@import "@/assets/scss/components/section/main/main03.scss";
</style>
