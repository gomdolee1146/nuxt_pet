<template>
  <div class="main">
    <div class="main__wrap">
      <div class="main__top_box">
        <div class="main__title main__title-lt txt_h1">
          <span>A tired</span><span>dog is</span>
        </div>
        <div class="main__title main__title-rb txt_h1">
          <span>a</span><span>happy dog!</span>
        </div>
        <div class="main__subtitle txt_h7">
          <span>Your trusted in-home</span><span>pet care companions!</span>
        </div>
      </div>

      <div class="main__thumb"></div>

      <div class="main__txt_wrap">
        <div class="main__desc">
          <textAnimation
            class="txt_h7"
            :textContent="textList"
            v-for="(textList, idx) in textContent"
            :key="idx"
          />
        </div>
      </div>
    </div>

    <bgBalls>
      <template v-slot:otherBalls>
        <div class="main__ball main__ball07 txt_h4 ani__ball">
          <span class="ani__ball-txt">
            <i class="ani__ball-l"></i>
            About US
            <i class="ani__ball-r"></i>
          </span>
        </div>
      </template>
    </bgBalls>
  </div>
</template>

<script>
import bgBalls from "@/components/atom/bgBalls.vue";
import textAnimation from "@/components/atom/textAnimation02.vue";

export default {
  name: "mainSection01",
  components: { bgBalls, textAnimation },
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
  methods: {
    scrollAnimation() {
      const gsap = this.$gsap;
      gsap.timeline({
        scrollTrigger: {
          trigger: ".box",
          start: "center center",
          end: "bottom top",
          markers: true,
          scrub: true,
          pin: true,
        },
      })
      
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/main/mainCommon.scss";
@import "@/assets/scss/components/section/main/main01.scss";
</style>
