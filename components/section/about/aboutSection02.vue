<template>
   <div class="about">
      <div class="about__bg"></div>
      <div class="about__wrap">
        <div class="about__title-l txt_subtitle1">THE YOUR LOVE</div>
        <div class="about__title-r txt_subtitle1">PETS DESERVES</div>
        <div class="about__center">
          <div class="about__circle">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
              <defs>
                <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_top">
                  <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
                </path>
                <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_bottom">
                  <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="195 250 250" to="555 250 250" repeatCount="indefinite" />
                </path>
              </defs>
              <text dy="70" textLength="1220">
                <textPath xlink:href="#textcircle_bottom">IT'S MAKE YOUR PETS HAPPY! IT'S MAKE YOUR PETS HAPPY!</textPath>
                <textPath xlink:href="#textcircle_top">ㅎㅎ</textPath>
              </text>
            </svg>
          </div>
          <div class="about__thumb">이미지</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'aboutSection02',
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/about/aboutCommon.scss";
@import "@/assets/scss/components/section/about/about02.scss";
</style>