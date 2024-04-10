<template>
  <div class="blog">
    <div class="blog__title txt_h1">
      don't board me blog
      <i class="ico__ball"></i>
    </div>
    <div class="blog__top">
      <div class="blog__filter">
        <button
          v-for="(filterBtn, idx) in filterList"
          :key="idx"
          class="txt_h6"
        >
          {{ filterBtn }}
        </button>
      </div>
    </div>
    <ul class="blog__list">
      <li class="blog__lst" v-for="(blogContent, idx) in blogData" :key="idx">
        <i class="ico__ball"></i>
        <i class="ico__ball" v-if="idx % 2 === 0"></i>
        <i class="ico__bone-default" v-else></i>
        <nuxt-link
          :to="{
            name: 'blog-detail',
            params: { detail: idx, content: blogContent },
          }"
        >
          <div class="blog__box">
            <h4 class="blug__num txt_h6">{{ idx }}</h4>
            <div class="blog__thumb">
              <img
                :src="
                  require(`~/assets/imgs/blog/blog_${setNameList(idx)}.png`)
                "
                alt="blogThumbnail"
              />
            </div>
            <div class="blog__content_title txt_h8">{{ blogContent.title }}</div>
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
  methods: {
    setNameList(num) {
      const fileName = num + 1 
      const result = String(fileName).padStart(2, "0");
      return result;
    },
    filterData(filter) {
      const result = this.blogData.filter((el) => {
        el.tag.filter((elTag) => {
          return elTag === filter;
        });
      });
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/blog/blog.scss";
</style>
