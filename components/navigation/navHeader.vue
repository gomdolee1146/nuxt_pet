<template>
  <header class="header">
    <div class="header__left">
      <a class="header__logo" @click="goToPage('/')"></a>
    </div>
    <div class="header__center">
      <div
        class="ico__menu"
        v-if="isScroll && !isHeaderFull"
        @click="toggleHeaderMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <template v-else>
        <div class="header__nav_wrap" :class="{ on: isHeaderFull }">
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
              v-for="(circle, idx) in 5"
              :key="idx"
              :class="`header__nav_circle${idx + 1}`"
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
    headerScroll() {
      const gsap = this.$gsap;
      const ScrollTrigger = this.$ScrollTrigger;

      const showAnim = gsap
        .from(".header", {
          yPercent: -100,
          paused: true,
          duration: 0.2,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (self.direction === -1) {
            this.isScroll = true;
            // console.log(self.direction);
            showAnim.play();
          } else {
            showAnim.reverse();
          }
        },
      });
    },
    toggleHeaderMenu() {
      this.isHeaderFull = !this.isHeaderFull;
    },
  },
  computed: {
    navMenu() {
      return this.$store.state.menuList.navMenu;
    },
  },
  mounted() {
    this.headerScroll();
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/navigation/navHeader.scss";
</style>
