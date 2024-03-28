<template>
  <div class="intro">
    <div class="intro__center txt_headline1">
      Loading <span ref="introCountNum">0</span>%...
    </div>
    <div class="intro__btm txt_headline5">
      You've landed on a dog walking site. Follow our rules to keep your dog
      happy.
    </div>
  </div>
</template>

<script>
export default {
  name: "introWrap",
  data() {
    return {
      max: 100,
    };
  },
  methods: {
    goToMain() {
      this.$router.push({
        path: "/",
      });
    },
    loadingCount(countNum, max) {
      let now = max;
      const controller = setInterval(() => {
        countNum.innerHTML = Math.ceil(max - now)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        if (now < 1) {
          clearInterval(controller);
          setTimeout(() => {
            this.goToMain();
          }, 500)
        }
        let step = now / 7;
        now -= step;
      }, 50);
     
    },
  },
  mounted() {
    this.loadingCount(this.$refs.introCountNum, this.max);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/introWrap.scss";
</style>
