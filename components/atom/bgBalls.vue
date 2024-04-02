<template>
  <div :class="`${vClass}__ball_wrap`">
    <div
      :class="`${vClass}__ball ${vClass}__ball0${idx}`"
      v-for="idx in ballsCount"
      :key="idx"
    ></div>
    <slot name="otherBalls"></slot>
  </div>
</template>

<script>
export default {
  name: "bgBalls",
  props: {
    vClass: { type: String, default: "main" },
    ballsCount: { type: Number, default: 6 },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/bgBalls.scss";
</style>
