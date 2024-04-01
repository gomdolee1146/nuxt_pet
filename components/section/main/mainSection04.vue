<template>
  <div class="main">
    <div class="main__desc">
      the personalized in-home care your pet deserves!
    </div>
    <div class="main__title">the care your pet deserves!</div>
    <div class="main__swiper">
      <div class="main__swiper_title">testimonials</div>
      <div class="main__swiper-title">
        <!-- <swiper :options="swiperTitleOption">
          <swiper-slide v-for="(review, idx) in reviewList" :key="idx">
            <div>{{ review.name }}</div>
          </swiper-slide>
        </swiper> -->
      </div>
      <div class="main__swiper-card">
        <!-- <swiper :options="swiperCardOption" @swiper="setCardsSwiper">
          <swiper-slide v-for="(review, idx) in reviewList" :key="idx">
            <div @click="showReviewSheet(idx)">{{ review.title }}</div>
          </swiper-slide>
        </swiper> -->
      </div>
    </div>

    <!-- <reviewBtmSheet
      :toHideReviewSheet="toHideReviewSheet"
      :reviewData="reviewData"
    /> -->
  </div>
</template>

<script>
// import reviewBtmSheet from "@/components/section/review/reviewBtmSheet.vue";
export default {
  // components: { reviewBtmSheet },
  name: "mainSection04",
  data() {
    return {
      isShow: false,
      reviewData: {},

      swiperTitleOption: {
        spaceBetween: 10,
        navigation: true,
        // thumbs: { swiper: thumbsSwiper.value },
        slidesPerView: 3,
        // modules: this.modules
      },
      // swiperCardOption: {
      //   spaceBetween: 10,
      //   freeMode: true,
      //   watchSlidesProgress: true,
      // },
    };
  },
  // methods: {
  //   showReviewSheet(idx) {
  //     this.isShow = !this.isShow;
  //     this.reviewData = this.reviewList[idx];
  //   },
  // },
  // computed: {
  //   reviewList() {
  //     return this.$store.state.mainSection.reviewList;
  //   },
  //   setCardsSwiper(swiper) {
  //     // thumbsSwiper.value = swiper;
  //   },
  //   toHideReviewSheet(data) {
  //     this.isShow = data;
  //   },
  // },
};
</script>

<style></style>
