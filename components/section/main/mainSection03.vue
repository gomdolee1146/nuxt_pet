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
      <div
        class="main__card"
        v-for="(steps, idx) in aboutSteps"
        :key="idx"
        ref="cardWrap"
      >
        <div class="main__card-front" ref="cardFront"></div>
        <div class="main__card-back" ref="cardBack">
          <div class="main__card_title txt_h4">{{ steps.title }}</div>
          <div class="main__card_num txt_h4">{{ steps.num }}.</div>
          <div class="main__card_desc txt_h9">{{ steps.desc }}</div>
          <div class="main__card_thumb">
            <img
              :src="require(`~/assets/imgs/about/about_step${steps.num}.png`)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="main__desc">
      <!-- just fill out the form, <br /> -->
      <!-- and we'll be happy to assist you with your pet. -->
      <textAnimation
        class="txt_h8"
        :textContent="textList"
        v-for="(textList, idx) in textContent"
        :key="idx"
      />
    </div>
    <button class="main__btn-book ani__ball">
      <span class="ani__ball-txt">
        <i class="ani__ball-l"></i>
        Book now!
        <i class="ani__ball-r"></i>
      </span>
    </button>
  </div>
</template>

<script>
import textAnimation from "@/components/atom/textAnimation02.vue";

export default {
  name: "mainSection03",
  components: { textAnimation },
  data() {
    return {
     
      textContent: [
        `just fill out the form,`,
        `and we'll be happy to assist you with your pet.`,
      ],
    };
  },
  computed: {
    aboutSteps() {
      return this.$store.state.aboutSection.aboutSteps;
    },
  },
  methods: {
    flipCards() {
      const gsap = this.$gsap;
      const cardWrap = this.$refs.cardWrap;
      const timeline = gsap.timeline({ paused: true })

      gsap.utils.toArray(cardWrap).forEach((card) => {
        gsap.set(card, {
          transformStyle: "preserve-3d",
          transformPerspective: 1000,
        });

        const cards = gsap.utils.selector(card);
        const front = cards(".main__card-front");
        const back = cards(".main__card-back");

        gsap.set(back, { rotationY: -180 });

        timeline
          .to(front, { duration: 1, rotationY: 180 })
          .to(back, { duration: 1, rotationY: 0 }, 0)
          .to(card, { z: 50 }, 0)
          .to(card, { z: 0 }, 0.5);
      });
    },
    // flipEnter() {
    //   this.timeline.play();
    // },
    // flipLeave() {
    //   this.timeline.reverse();
    // },
  },
  mounted() {
    this.flipCards();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/main/mainCommon.scss";
@import "@/assets/scss/components/section/main/main03.scss";
</style>
