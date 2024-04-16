<template>
  <div class="text_ani">
    <span class="text_trigger"></span>
    <span
      v-for="(text, index) in textContent"
      :key="index"
      class="text_ani__text"
      v-html="text"
      ref="textContent"
    />
  </div>
</template>

<script>
export default {
  name: "textAnimation",
  props: {
    textContent: { type: String, default: "" },
  },
  data() {
    return {
      textScroll() {
        const gsap = this.$gsap;
        const text = this.$refs.textContent;

        const textSplit = gsap.timeline({
          onComplete: () => {
            SplitGreat.revert();
          },
        });
        const SplitGreat = new SplitText(text, { type: "words, chars" });
        const chars = SplitGreat.chars;

        textSplit.from(
          chars,
          {
            duration: 0.8,
            opacity: 0,
            y: 10,
            ease: "circ.out",
            stagger: 0.02,
          },
          "+=0"
        );
      },
    };
  },
  mounted(){
    this.textScroll()
  }
};
</script>
