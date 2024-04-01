<template>
  <div class="review">
    <div class="review__header">
      <button class="cls" @click="toHideReviewSheet"></button>
    </div>
    <div class="review__content">
      <div class="review__box">
        <!-- <img :src="" /> -->
      </div>
      <div class="review__box">
        <h4>{{ reviewData.name }}</h4>
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
    },
  },
};
</script>
