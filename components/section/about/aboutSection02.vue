<template>
  <div class="about">
    <div class="about__bg"></div>
    <div class="about__wrap">
      <div class="about__title-l txt_h7">THE YOUR LOVE</div>
      <div class="about__title-r txt_h7">PETS DESERVES</div>
      <div class="about__center">
        <div class="about__circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 500"
          >
            <defs>
              <path
                d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                id="textcircle_bottom"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="20s"
                  type="rotate"
                  from="195 250 250"
                  to="555 250 250"
                  repeatCount="indefinite"
                />
              </path>
            </defs>
            <text dy="70" textLength="810">
              <textPath xlink:href="#textcircle_bottom">
                IT'S MAKE YOUR PETS HAPPY!
              </textPath>
            </text>
          </svg>
        </div>
        <div class="about__thumb"></div>
      </div>

      <div class="about__circle-l"></div>
      <div class="about__circle-r"></div>
      <div class="about__circle-btm"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutSection02",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/about/aboutCommon.scss";
@import "@/assets/scss/components/section/about/about02.scss";
</style>
