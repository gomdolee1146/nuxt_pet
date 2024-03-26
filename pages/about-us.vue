<template>
  <section class="main">
    <mainSection01 />
    <mainSection02 />
    <mainSection04 />
  </section>
</template>

<script>
import mainSection01 from "@/components/section/main/mainSection01.vue";
import mainSection02 from "@/components/section/main/mainSection02.vue";
import mainSection04 from "@/components/section/main/mainSection04.vue";

export default {
  name: "mainSection",
  components: { mainSection01, mainSection02, mainSection04 },
  layout: "pinkLayout",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>