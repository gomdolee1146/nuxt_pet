<template>
  <div>
    <mainSection01 />
    <mainSection02 />
    <mainSection03 />
    <mainSection04 />
     <mainSection05 />
    <mainSection06 />
  </div>
</template>

<script>
import mainSection01 from "@/components/section/main/mainSection01.vue";
import mainSection02 from "@/components/section/main/mainSection02.vue";
import mainSection03 from "@/components/section/main/mainSection03.vue";
import mainSection04 from "@/components/section/main/mainSection04.vue";
import mainSection05 from "@/components/section/main/mainSection05.vue";
import mainSection06 from "@/components/section/main/mainSection06.vue";

export default {
  name: "mainWrap",
  components: {
    mainSection01,
    mainSection02,
    mainSection03,
    mainSection04,
    mainSection05,
    mainSection06,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/main/mainCommon.scss";
</style>
