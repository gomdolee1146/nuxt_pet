<template>
  <div class="text_ani">
    <span class="text_trigger" ref="trigger"></span>
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
  name: "textAnimation02",
  props: {
    textContent: { type: String, default: "" },
  },
  data() {
    return {};
  },
  methods: {
    textScroll() {
      const gsap = this.$gsap;
      const text = this.$refs.textContent;
      const trigger = this.$refs.trigger;

      gsap.from(text, {
        opacity: 0,
        duration: 0.1,
        ease: "power1.out",
        stagger: 0.1,

        scrollTrigger: {
          trigger: trigger,
          start: "bottom center",
        },
      });
    },
  },
  mounted() {
    this.textScroll();
  },
};
</script>
<style lang="scss" scoped>
.text_ani {
  position: relative;
}
.text_trigger {
  position: absolute;
  top: -80px;
}
</style>
