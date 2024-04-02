<template>
  <div class="pricing">
    <div
      class="pricing__card"
      v-for="(pricingInfo, idx) in pricingList"
      :key="idx"
    >
      <div class="pricing__card_box">
        <div class="pricing__badge txt_caption" v-if="pricingInfo.popular">MOST POPULAR</div>
        <h4 class="txt_headline6">{{ pricingInfo.name }}</h4>
        <h2 class="txt_headline3">
          {{ pricingInfo.price
          }}<span class="pricing__card_period">{{ pricingInfo.period === 'month' ? `/MO.` : '' }}</span>
        </h2>
        <p class="pricing__txt">{{ pricingInfo.desc }}</p>
      </div>
      <button class="pricing__btn pricing__btn-try txt_subtitle2">
        TRY IT!
      </button>
    </div>
    <div class="pricing__card pricing__card-last" v-if="isShowBtn">
      <h4 class="txt_headline6">pricing page</h4>
      <button class="pricing__btn-go">
        <i class="ico__arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pricingCard",
  data() {
    return {
      isShowBtn: false,
      pricingList: [],
    };
  },
  props: {
    isShowLast: { type: Boolean, default: false },
  },
  computed: {
    pricingData() {
      return this.$store.state.pricingSection.pricingList;
    },
  },
  methods:{
    test(){
      if (this.isShowLast === true) {
        this.isShowBtn = true;
        this.pricingList = _.initial(this.pricingData)
      } else {
        this.isShowBtn = false
        this.pricingList = this.pricingData
      }
    }
  },
  mounted(){
    this.test()
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/pricing/pricingCard.scss";
</style>
