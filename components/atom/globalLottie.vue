<template>
  <div id="svgContainer" />
</template>

<script>
if (process.client) {
  window.lottie = window.lottie || require("lottie-web");
}

export default {
  props: {
    lottieOptions: {
      dataUrl: "",
      refs: "",
    },
  },

  mounted() {
    const svgContainer = this.$el.querySelector("#svgContainer");
    lottie.loadAnimation({
      wrapper: svgContainer,
      animType: "svg",
      loop: true,
      path: this.lottieOptions.dataUrl,
    });
  },
};
</script>
