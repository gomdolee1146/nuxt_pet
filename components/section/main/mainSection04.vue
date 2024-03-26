<template>
  <div class="main">
    <swiper :options="mainSwiperOption">
      <swiper-slide
        v-for="(blogContent, idx) in blogData"
        :key="idx"
      >
        <div class="main__swiper">
          <div class="main__swiper-l">
            <div class="main__swiper_box">
              <h4 class="txt_headline4">{{ blogContent.num }}</h4>
              <h2 class="txt_headline2">{{ blogContent.title }}</h2>
            </div>
            <p class="txt_body1">{{ blogContent.desc }}</p>
          </div>
          <div class="main__swiper-r">
            <img
              :src="blogContent.img"
              :alt="blogContent.title"
              class="main__swiper_img"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="main__swiper_nav">
      <div class="main__swiper_nav-next"></div>
      <div class="main__swiper_nav-prev"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {
      mainSwiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          pauseOnMouseEnter: true,
        },
        spaceBetween: 16,
        navigation: {
          nextEl: ".main__swiper_nav-next",
          prevEl: ".main__swiper_nav-prev",
        },
      },
    };
  },
  computed:{
    blogData(){
      return this.$store.state.mainSection.mainSection04
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/main/mainCommon.scss";
@import "@/assets/scss/components/section/main/main04.scss";
</style>
