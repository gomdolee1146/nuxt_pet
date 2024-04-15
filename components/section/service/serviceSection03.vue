<template>
  <div class="service">
    <div
      class="service__card"
      v-for="(service, idx) in serviceData"
      :key="idx"
      :class="{ on: activeIndex === idx }"
      @click="changeIndexNum(idx)"
    >
      <div class="service__txt txt_h9">{{ service.title }}</div>
      <template v-if="activeIndex === idx">
        <transition name="card">
          <div class="service__price txt_h9">
            {{ service.priceInfo }}
          </div>
        </transition>
        <transition name="card">
          <div class="service__title txt_h2">
            {{ service.title }}
          </div>
        </transition>
        <transition name="card">
          <div class="service__desc txt_h9">{{ service.desc }}</div>
        </transition>
        <transition name="card">
          <button class="service__btn-booking ani__ball">
            <span class="ani__ball-txt">
              <i class="ani__ball-l"></i>
              book now!
              <i class="ani__ball-r"></i>
            </span>
          </button>
        </transition>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceSection03",
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    serviceData() {
      return this.$store.state.serviceSection.serviceList;
    },
  },
  methods: {
    changeIndexNum(num) {
      this.activeIndex = num;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/service/service03.scss";
</style>
