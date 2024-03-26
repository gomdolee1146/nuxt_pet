<template>
  <div class="intro" @click="goToMain">로딩페이지</div>
</template>

<script>
export default {
  name: "introWrap",
  methods: {
    goToMain() {
      this.$router.push({
        path: "/about-us",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/introWrap.scss";
</style>
