<template>
  <section class="about">
    <aboutSection01 />
    <aboutSection02 />
    <aboutSection03 />
    <aboutSection04 />
    <aboutSection05 />
    <aboutSection06 />
    <aboutSection07 />
  </section>
</template>

<script>
import aboutSection01 from "@/components/section/about/aboutSection01.vue";
import aboutSection02 from "@/components/section/about/aboutSection02.vue";
import aboutSection03 from "@/components/section/about/aboutSection03.vue";
import aboutSection04 from "@/components/section/about/aboutSection04.vue";
import aboutSection05 from "@/components/section/about/aboutSection05.vue";
import aboutSection06 from "@/components/section/about/aboutSection06.vue";
import aboutSection07 from "@/components/section/about/aboutSection07.vue";

export default {
  name: "aboutWrap",
  components: {
    aboutSection01,
    aboutSection02,
    aboutSection03,
    aboutSection04,
    aboutSection05,
    aboutSection06,
    aboutSection07,
  },
};
</script>
