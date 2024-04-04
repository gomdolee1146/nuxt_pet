<template>
  <div class="photo_view">
    <div
      class="photo_view__list"
      :class="`photo_view__list${setNameList(num)}`"
      v-for="num in photoCount"
      :key="num"
    >
      <img :src="require(`~/assets/imgs/dog_${setNameList(num)}.png`)" />
    </div>
    <div class="photo_view__txt txt_headline2">{{ photoText }}</div>
  </div>
</template>

<script>
export default {
  name: "photoView",
  data() {
    return {
      photoCount: 10,
    };
  },
  props: {
    photoText: { type: String, default: "@DONTBOARDME" },
  },
  methods: {
    setNameList(num) {
      const result = String(num).padStart(2, "0");
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/photoView.scss";
</style>
