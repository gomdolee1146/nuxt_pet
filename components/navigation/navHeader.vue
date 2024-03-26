<template>
  <header class="header">
    <div class="header__left">
      <a class="header__logo" @click="goToPage('/')"></a>
    </div>
    <div class="header__center">
      <div class="header__nav_wrap">
        <button
          class="header__nav_btn"
          v-for="(navList, idx) in navHeaderData"
          :key="idx"
          @click="goToPage(navList.link)"
        >
          {{ navList.txt }}
        </button>
      </div>
    </div>
    <div class="header__right">
      <button class="header__btn-book" @click="goToPage('/booking')">
        BOOK NOW
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "navHeader",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    goToPage(page) {
      this.$router.push({
        path: page,
      });
    },
  },
  computed: {
    navHeaderData() {
      return this.$store.state.navHeader.navHeaderList;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/navigation/navHeader.scss";
</style>
