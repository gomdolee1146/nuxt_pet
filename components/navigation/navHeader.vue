<template>
  <header class="header">
    <div class="header__left">
      <a class="header__logo"></a>
    </div>
    <div class="header__center">
      <div class="header__nav_wrap">
        <button
          class="header__nav_btn"
          v-for="(navList, idx) in data.navHeaderList"
          :key="idx"
        >
          {{ navList.txt }}
        </button>
      </div>
    </div>
    <div class="header__right">
      <button class="header__btn-book">예약하기</button>
    </div>
  </header>
</template>

<script>
import navHeaderData from "@/data/navHeader.js";

export default {
  name: 'navHeader',
  components: {},
  props: {},
  data() {
    return {
      data: navHeaderData,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/navigation/navHeader.scss";
</style>
