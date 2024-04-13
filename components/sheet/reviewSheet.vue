<template>
  <transition name="slide-up">
    <div class="sheet">
      <div class="g_dimmed" @click="toHideReviewSheet"></div>
      <div class="sheet__wrap">
        <div class="sheet__header">
          <span class="txt_h9">{{ reviewData.name }}</span>
          <button class="btn-cls" @click="toHideReviewSheet"></button>
          <span class="txt_h9">{{ `${reviewData.num} - 08` }}</span>
        </div>
        <div class="sheet__content">
          <div class="sheet__box">
            <!-- <img :src="" /> -->
          </div>
          <div class="sheet__box sheet__box-txt">
            <h6 class="txt_h7">{{ reviewData.date }}</h6>
            <h5 class="txt_h5">{{ reviewData.title }}</h5>
            <p class="txt_h8">{{ reviewData.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "reviewSheet",
  data() {
    return {};
  },
  props: {
    reviewData: { type: Object, default: () => {} },
  },
  methods: {
    toHideReviewSheet() {
      this.$emit("hideReviewSheet", false);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/sheet/sheetCommon.scss";
</style>
