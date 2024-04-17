<template>
  <div class="main">
    <div class="main__circle"></div>
    <div class="main__wrap">
      <div class="main__desc">
        <textAnimation
          class="txt_h5"
          :textContent="textList"
          v-for="(textList, idx) in textContent"
          :key="idx"
        />
        <!-- <span>the personalized in-home</span
        ><span> care your pet deserves!</span> -->
      </div>
      <div class="ico_box">
        <i class="ico__arrow-down"></i>
      </div>
      <div class="main__title txt_h1">
        <span>the care your</span><span>pet deserves!</span>
      </div>
      <div class="main__ball_wrap">
        <div
          class="main__ball"
          :class="`main__ball0${idx}`"
          v-for="idx in 7"
          :key="idx"
        ></div>
      </div>
      <div class="main__swiper">
        <div class="main__swiper_bg"></div>
        <div class="main__swiper_title txt_h5">testimonials</div>
        <div class="main__swiper-title">
          <swiper :options="swiperTitleOption" ref="swiperTop">
            <swiper-slide v-for="(review, idx) in reviewList" :key="idx">
              <div class="txt_h7">{{ review.num }}</div>
              <div class="txt_h5">{{ review.name }}</div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="main__swiper-card">
          <swiper :options="swiperCardOption" ref="swiperReview">
            <swiper-slide v-for="(review, idx) in reviewList" :key="idx">
              <div class="txt_h3" @click="showReviewSheet(idx)">
                {{ review.title }}
              </div>
            </swiper-slide>
          </swiper>
          <div class="main__swiper_navi-next"></div>
          <div class="main__swiper_navi-prev"></div>
        </div>
      </div>
      <div class="themeBlue-theme">
        <div class="main__bg"></div>
      </div>
    </div>
      <reviewSheet
        v-if="isShow"
        :reviewData="reviewData"
        @hideReviewSheet="test"
      />
  </div>
</template>
<script>
import reviewSheet from "@/components/sheet/reviewSheet.vue";
import textAnimation from "@/components/atom/textAnimation02.vue";

export default {
  components: { reviewSheet, textAnimation },
  name: "mainSection04",
  data() {
    return {
      textContent: [`the personalized in-home`, `care your pet deserves!`],
      isShow: false,
      reviewData: {},

      swiperTitleOption: {
        notNextTick: true,
        navigation: true,
        thumbs: { swiper: this.$refs.swiperReview },
        slidesPerView: 5,
        centeredSlides: true,
        loop: true,
        wrapperClass: "g_swiper",
        slideClass: "g_swiper__slide",
      },
      swiperCardOption: {
        notNextTick: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".main__swiper_navi-next",
          prevEl: ".main__swiper_navi-prev",
        },
        loop: true,
      },
    };
  },
  methods: {
    showReviewSheet(idx) {
      this.isShow = !this.isShow;
      this.reviewData = this.reviewList[idx];
      document.body.style.overflow = "hidden";
    },
    test(data) {
      this.isShow = data;
      document.body.style.overflow = "";
    },
  },
  computed: {
    reviewList() {
      return this.$store.state.mainSection.reviewList;
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   const swiperTop = this.$refs.swiperTop.swiper;
    //   const swiperReview = this.$refs.swiperReview.swiper;
    //   swiperTop.controller.control = swiperReview;
    //   swiperReview.controller.control = swiperTop;
    // });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/main/mainCommon.scss";
@import "@/assets/scss/components/section/main/main04.scss";
</style>
