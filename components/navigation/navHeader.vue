<template>
  <header class="header">
    <div class="header__left">
      <a class="header__logo" @click="goToPage('/')"></a>
    </div>
    <div class="header__center">
      <div class="ico__menu" v-if="isScroll && !isHeaderFull">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <template v-else>
        <div class="header__nav_wrap" :class="{ isHeaderFull: 'on' }">
          <button
            class="header__nav_btn"
            v-for="(menu, idx) in navMenu"
            :key="idx"
            @click="goToPage(menu.link)"
          >
            {{ menu.txt }}
          </button>
          <template v-if="isHeaderFull">
            <div
              class="header__nav_circle"
              v-for="circle in 5"
              :key="circle"
              :class="`header__nav_circle${circle}`"
            ></div>
          </template>
        </div>
      </template>
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
    return {
      isHeaderFull: false,
      isScroll: false,
    };
  },
  methods: {
    goToPage(page) {
      this.$router.push({
        path: page,
      });
    },
  },
  computed: {
    navMenu() {
      return this.$store.state.menuList.navMenu;
    },
  },
  mounted(){
    const gsap = this.$gsap; 
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/navigation/navHeader.scss";
</style>
