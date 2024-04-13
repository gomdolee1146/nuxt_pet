<template>
  <div class="photo_view" ref="photoView" @mousemove="viewMove">
    <div class="mouse__cursor" ref="mouseCursor"></div>
    <div
      class="photo_view__list"
      :class="`photo_view__list${setNameList(num)}`"
      v-for="num in photoCount"
      :key="num"
    >
      <img :src="require(`~/assets/imgs/dog_${setNameList(num)}.png`)" />
    </div>
    <div class="photo_view__txt txt_h2">{{ photoText }}</div>
  </div>
</template>

<script>
export default {
  name: "photoView",
  data() {
    return {
      photoCount: 10,
    };
  },
  props: {
    photoText: { type: String, default: "@DONTBOARDME" },
  },
  methods: {
    setNameList(num) {
      const result = String(num).padStart(2, "0");
      return result;
    },
    viewMove(e) {
      const gsap = this.$gsap;
      const cursor = this.$refs.mouseCursor;
      const photoView = this.$refs.photoView;

      const cursorRect = cursor.getBoundingClientRect();
      gsap.to(cursor, {
        duration: 0.5,
        left: e.pageX - cursorRect.width / 2,
        top: e.pageY - cursorRect.height / 2,
      });

      let mousePageX = e.pageX;
      let mousePageY = e.pageY;

      let centerPageX = window.innerWidth / 2 - mousePageX;
      let centerPageY = window.innerHeight / 2 - mousePageY;

      gsap.to(photoView, {
        duration: 0.3,
        x: centerPageX / 20,
        y: centerPageY / 100,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/photoView.scss";
</style>
