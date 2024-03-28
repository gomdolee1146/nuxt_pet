<template>
  <div>하이 22</div>
</template>

<script>
export default {
  name: "blogDetail",
  props: {
    param: { type: String, default: "" },
  },
  computed: {
    blogDetail() {
      this.$store.state.blogSection.blogList;
    },
  },
};
</script>

<style></style>
