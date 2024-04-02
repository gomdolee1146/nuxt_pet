<template>
  <section class="about">
    <aboutSection01 />
    <aboutSection02 />
    <aboutSection03 />
    <aboutSection04 />
  </section>
</template>

<script>
import aboutSection01 from "@/components/section/about/aboutSection01.vue";
import aboutSection02 from "@/components/section/about/aboutSection02.vue";
import aboutSection03 from "@/components/section/about/aboutSection03.vue";
import aboutSection04 from "@/components/section/about/aboutSection04.vue";

export default {
  name: "aboutSection",
  components: {
    aboutSection01,
    aboutSection02,
    aboutSection03,
    aboutSection04,
  },
  layout: "pinkLayout",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
