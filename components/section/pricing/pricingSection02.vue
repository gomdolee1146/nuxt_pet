<template>
  <div class="pricing">
    <div class="pricing__bg-large"></div>
    <div class="pricing__bg">
      <div class="pricing__circle">
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
          <text dy="70" textLength="560">
            <textPath xlink:href="#textcircle_top">addition!</textPath>
          </text>
        </svg>
      </div>
    </div>
    <div class="pricing__box">
      <div class="ico_box">
        <i></i>
        <span class="txt_h9">More walks <br />more savings</span>
      </div>
    </div>

    <div class="pricing__addition">
      <ul class="pricing__addition_list">
        <li class="pricing__addition_lst" v-for="(list, idx) in additionList" :key="idx">
          <div class="pricing__addition_box">
            <div class="pricing__addition_badge">TRY IT!</div>
            <h4 class="txt_h3">{{ list.title }}</h4>
          </div>
          <div class="pricing__addition_price">
            <h6 class="txt_h3">{{ list.price }}</h6>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pricingSection02',
  data(){
    return {
     
    }
  },
  computed:{
    additionList(){
      return this.$store.state.pricingSection.additionalList;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/section/pricing/pricing02.scss";
</style>
