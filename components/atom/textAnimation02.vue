<template>
  <div class="text-animation">
    <span
      v-for="(text, index) in textContent"
      :key="index"
      class="item"
      :style="{ animationDelay: index * 100 + 'ms' }"
      v-html="text"
    />
  </div>
</template>

<script>
export default {
  name: "textAnimation02",
  props: {
    textContent: { type: String, default: "" },
    isAniStart: { type: Boolean, default: false },
  },
  data() {
    return {};
  },
  methods: {
    textScroll() {
      const gsap = this.$gsap;

      gsap.from(".text-animation .item", {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "back.out",
        stagger: 0.1,

        scrollTrigger: {
          trigger: ".text-animation",
          start: "top center",
        },
      });
    },
  },
};
</script>
