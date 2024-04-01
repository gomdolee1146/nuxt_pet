<template>
  <footer class="footer txt_subtitle1">
    <div class="footer__top">
      <div class="footer__l">
        <div class="footer__logo"></div>
        <div class="footer__txt">
          <span>san diego-carlsbad, ca</span><span>metropolitan area</span>
        </div>
      </div>
      <div class="footer__r">
        <ul class="footer__list">
          <li class="footer__lst" v-for="(menu, idx) in navMenu" :key="idx">
            <button @click="goToPage(menu.link)">{{ menu.txt }}</button>
          </li>
        </ul>
        <ul class="footer__list">
          <li class="footer__lst" v-for="(menu, idx) in footerBtn" :key="idx">
            <button>{{ menu }}</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__btm">
      <div class="footer__l">&copy; 2024 곰도뤼 all rights reserved</div>
      <div class="footer__r">made by <i>gomdolee</i></div>
    </div>
    <div class="footer__desc">gomdolee@gmail.com</div>
  </footer>
</template>

<script>
export default {
  name: "footerBox",
  data() {
    return {
      footerBtn: [
        "privacy policy",
        "terms of use",
        "faq",
        "instagram",
        "tik-tok",
      ],
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
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/navigation/footer.scss";
</style>
