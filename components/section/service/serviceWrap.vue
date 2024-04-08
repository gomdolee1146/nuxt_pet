<template>
  <div class="service">
    <serviceSection01 />
    <serviceSection02 />
    <serviceSection03 />
  </div>
</template>

<script>
import serviceSection01 from "@/components/section/service/serviceSection01.vue";
import serviceSection02 from "@/components/section/service/serviceSection02.vue";
import serviceSection03 from "@/components/section/service/serviceSection03.vue";

export default {
  name: "serviceWrap",

  components: { serviceSection01, serviceSection02, serviceSection03 },
};
</script>

<style></style>
