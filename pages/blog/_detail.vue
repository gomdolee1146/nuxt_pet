<template>
  <div>
    하이?
  </div>
</template>

<script>

export default {
  name: "blogDetail",
  data() {
    return {
      param: "",
    };
  },
  mounted() {
    this.param = this.$route.params.detail;
  },
};
</script>
