<template>
  <div class="service">
    <div class="service__title txt_headline1">Our services</div>
    <p class="service__desc txt_body2">
      <span>help to ensure your furry family member </span>
      <span>is as happy as can be!</span>
    </p>
    <div class="service__bg">
      <div class="service__circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 500 500"
        >
          <defs>
            <path
              d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
              id="textcircle_top"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="20s"
                type="rotate"
                from="0 250 250"
                to="360 250 250"
                repeatCount="indefinite"
              />
            </path>
          </defs>
          <text dy="70" textLength="720">
            <textPath xlink:href="#textcircle_top">
              let's book a walk
            </textPath>
          </text>
        </svg>
      </div>
    </div>
    <div class="service__img"></div>

    <div class="ico_box">
      <i class="ico__arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/service/service01.scss";
</style>
