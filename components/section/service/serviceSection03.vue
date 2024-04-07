<template>
  <div class="service">
    <div
      class="service__card"
      v-for="(service, idx) in serviceData"
      :key="idx"
      :class="{ on: activeIndex === idx }"
    >
      <div class="service__txt txt_body2">{{ service.title }}</div>
      <template v-if="activeIndex === idx">
        <div class="service__price txt_body2">{{ service.priceInfo }}</div>
        <div class="service__title txt_headline2">{{ service.title }}</div>
        <div class="service__desc txt_body2">{{ service.desc }}</div>
        <button class="service__btn-booking">book now</button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceSection03",
  data() {
    return {
      activeIndex: 0
    };
  },
  computed: {
    serviceData() {
      return this.$store.state.serviceSection.serviceList;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/service/service03.scss";
</style>
