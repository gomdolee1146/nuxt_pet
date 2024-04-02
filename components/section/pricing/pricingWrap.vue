<template>
  <div>
    <pricingSection01 />
    <pricingCard />
    <pricingSection02 />
  </div>
</template>

<script>
import pricingSection01 from "@/components/section/pricing/pricingSection01.vue";
import pricingSection02 from "@/components/section/pricing/pricingSection02.vue";
import pricingCard from "@/components/section/pricing/pricingCard.vue";

export default {
  components: { pricingSection01, pricingSection02, pricingCard },
};
</script>
