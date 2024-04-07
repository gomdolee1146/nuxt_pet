<template>
  <div class="about">
    <swiper :options="aboutSwiperOption">
      <swiper-slide v-for="(blogContent, idx) in blogData" :key="idx">
        <div class="about__swiper">
          <div class="about__swiper-l">
            <div class="about__swiper_box">
              <h4 class="txt_headline2">{{ blogContent.num }}</h4>
              <h2 class="txt_headline3">{{ blogContent.title }}</h2>
            </div>
            <p class="txt_headline6">{{ blogContent.desc }}</p>
          </div>
          <div class="about__swiper-r">
            <img
              :src="require(`~/assets/imgs/dog_${blogContent.num}.png`)"
              :alt="blogContent.title"
              class="about__swiper_img"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="about__swiper_nav">
      <button class="about__swiper_nav-next">
        <i class="ico__arrow-right"></i>
      </button>
      <button class="about__swiper_nav-prev">
        <i class="ico__arrow-left"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {
      aboutSwiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          pauseOnMouseEnter: true,
        },
        spaceBetween: 16,
        navigation: {
          nextEl: ".about__swiper_nav-next",
          prevEl: ".about__swiper_nav-prev",
        },
        
      },
    };
  },
  computed: {
    blogData() {
      return this.$store.state.aboutSection.aboutService;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/about/aboutCommon.scss";
@import "@/assets/scss/components/section/about/about04.scss";
</style>
