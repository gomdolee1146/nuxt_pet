<template>
  <div class="main">
    <div class="main__circle"></div>

    <div class="main__wrap">
      <div class="main__desc txt_headline5">
        <span>the personalized in-home</span
        ><span> care your pet deserves!</span>
      </div>
      <div class="ico_box">
        <i class="ico__arrow-down"></i>
      </div>
      <div class="main__title txt_headline1">
        <span> the care your</span><span> pet deserves!</span>
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
        <div class="main__swiper_title txt_headline5">testimonials</div>
        <div class="main__swiper-title">
          <swiper :options="swiperTitleOption" ref="swiperTop">
            <swiper-slide v-for="(review, idx) in reviewList" :key="idx">
              <div class="txt_subtitle1">{{ review.num }}</div>
              <div class="txt_headline5">{{ review.name }}</div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="main__swiper-card">
          <swiper :options="swiperCardOption" ref="swiperReview">
            <swiper-slide v-for="(review, idx) in reviewList" :key="idx">
              <div class="txt_headline3" @click="showReviewSheet(idx)">
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
      @hideReviewSheet="toggleReviewSheet"
      
    />
  </div>
</template>

<script>
import reviewSheet from "@/components/sheet/reviewSheet.vue";
export default {
  components: { reviewSheet },
  name: "mainSection04",
  data() {
    return {
      isShow: false,
      reviewData: {},

      swiperTitleOption: {
        navigation: true,
        thumbs: { swiper: this.$refs.swiperReview },
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        wrapperClass: "g_swiper",
        slideClass: "g_swiper__slide",
      },
      swiperCardOption: {
        watchSlidesProgress: true,
        navigation: {
          nextEl: "main__swiper_navi-next",
          prevEl: "main__swiper_navi-prev",
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
  },
  computed: {
    reviewList() {
      return this.$store.state.mainSection.reviewList;
    },
    // setCardsSwiper(swiper) {
    //   this.$refs.swiperReview = swiper;
    // },
    toggleReviewSheet(data) {
      this.isShow = data;
      console.log('받아', data)
    },
  },
  mounted() {
    const swiperTop = this.$refs.swiperTop.$swiper;
    const swiperReview = this.$refs.swiperReview.$swiper;
    swiperTop.params.control = swiperReview;
    swiperReview.params.control = swiperTop;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/main/mainCommon.scss";
@import "@/assets/scss/components/section/main/main04.scss";
</style>
