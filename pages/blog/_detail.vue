<template>
  <div class="blog">
    <div class="blog__wrap blog__wrap-l">
      <div class="blog__circle"></div>

      <div class="blog__box">
        <div class="blog__tag_wrap">
          <span
            class="blog__tag txt_h10"
            v-for="(text, idx) in content.tag"
            :key="idx"
          >
            {{ text }}
          </span>
        </div>
        <div class="blog__title txt_h3">{{ content.title }}</div>
      </div>
      <div class="blog__btn">
        <button class="blog__btn-goback" @click="goToBlog">All articles</button>
      </div>
      <div class="blog__date">{{ content.date }}</div>
    </div>
    <div class="blog__wrap blog__wrap-r">
      <div class="blog__thumb">
        <img
          :src="require(`~/assets/imgs/blog/blog_${setNameList(idx)}.png`)"
        />
      </div>
      <div class="blog__content txt_h9">
        {{ content.contents }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogDetail",
  layout: "noFooter",
  data() {
    return {
      idx: "",
      content: {},
    };
  },
  mounted() {
    this.idx = this.$route.params.detail;
    this.content = this.$route.params.content;
  },
  methods: {
    setNameList(num) {
      const fileName = num + 1;
      const result = String(fileName).padStart(2, "0");
      return result;
    },
    goToBlog() {
      this.$router.push({
        path: "/blog",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/blog/blogDetail.scss";
</style>
