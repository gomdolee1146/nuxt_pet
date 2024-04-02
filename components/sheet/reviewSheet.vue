<template>
  <div class="sheet">
    <div class="g_dimmed"></div>
    <div class="sheet__wrap">
      <div class="sheet__header">
        <span class="txt_body2">{{ reviewData.name }}</span>
        <button class="btn-cls" @click="toHideReviewSheet"></button>
        <span class="txt_body2">{{ `${reviewData.num} - 08` }}</span>
      </div>
      <div class="sheet__content">
        <div class="sheet__box">
          <!-- <img :src="" /> -->
        </div>
        <div class="sheet__box sheet__box-txt">
          <h6 class="txt_subtitle1">{{ reviewData.date }}</h6>
          <h5 class="txt_headline5">{{ reviewData.title }}</h5>
          <p class="txt_body1">{{ reviewData.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reviewSheet",
  data() {},
  props: {
    reviewData: { type: Object, default: () => {} },
  },
  methods: {
    toHideReviewSheet() {
      this.$emit("hideReviewSheet", false);
      console.log('보내')
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/sheet/sheetCommon.scss";
</style>
