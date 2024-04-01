<template>
  <div class="main">
    <div class="main__wrap">
      <div class="main__top_box">
        <div class="main__title main__title-lt txt_headline1">
          <span>A tired</span><span>dog is</span>
        </div>
        <div class="main__title main__title-rb txt_headline1">
          <span>a</span><span>happy dog!</span>
        </div>
        <div class="main__subtitle txt_subtitle1">
          <span>Your trusted in-home</span><span>pet care companions!</span>
        </div>
      </div>

      <div class="main__thumb"></div>

      <div class="main__txt_wrap">
        <div class="main__desc">
          <textAnimation
            class="txt_subtitle1"
            :textContent="textList"
            v-for="(textList, idx) in textContent"
            :key="idx"
          />
        </div>
      </div>
    </div>

    <div class="main__ball_wrap">
      <div
        class="main__ball"
        :class="`main__ball0${idx}`"
        v-for="idx in 6"
        :key="idx"
      ></div>
    </div>
  </div>
</template>

<script>
import textAnimation from "@/components/atom/textAnimation.vue";

export default {
  name: "mainSection01",
  components: { textAnimation },
  data() {
    return {
      textContent: [
        `Here at don't board me pet sitting,`,
        `we understand that your pets are`,
        `just as much a member of your family `,
        `as, well, you are! `,
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/main/mainCommon.scss";
@import "@/assets/scss/components/section/main/main01.scss";
</style>
