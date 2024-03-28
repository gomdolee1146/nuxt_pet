<template>
  <div class="blog">
    <div class="blog__filter">
      <button v-for="(filterBtn, idx) in filterList" :key="idx">
        {{ filterBtn }}
      </button>
    </div>
    <ul class="blog__list">
      <li class="blog__lst" v-for="(blogContent, idx) in blogData" :key="idx">
        <nuxt-link :to="{ name: 'blog-detail', params: { detail: idx } }">
          <div class="blog__box">
            <h4 class="txt_headline6">{{ idx }}</h4>
            <div class="blog__thumb">
              <img :src="blogContent.thumb" alt="blogThumbnail" />
            </div>
            <div class="blog__title">{{ blogContent.title }}</div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "blogSection",
  data() {
    return {
      filterList: ["all", "dog care", "helpful tips", "trainings", "fastFacts"],
    };
  },
  computed: {
    blogData() {
      return this.$store.state.blogSection.blogList;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/blog/blog.scss";
</style>
