<template>
  <div class="TextAnime1">
    <span
      v-for="(text, index) in textContent"
      :key="index"
      class="item"
      :style="{ animationDelay: index * 100 + 'ms' }"
      v-html="text"
    />
  </div>
</template>

<script>
export default {
  name: "textAnimation",
  props: {
    textContent: { type: String, default: "" },
  },
  data() {
    return {};
  },
};
</script>