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
          @click="filterData(filterBtn)"
        >
          {{ filterBtn }}
        </button>
      </div>
    </div>
    <ul class="blog__list">
      <li class="blog__lst" v-for="(blogContent, idx) in blogList" :key="idx">
        <i class="ico__deco"></i>
        <i class="ico__deco"></i>
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
            <div class="blog__content_title txt_h8">
              {{ blogContent.title }}
            </div>
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
      blogList: [],
    };
  },
  computed: {
    blogData() {
      return this.$store.state.blogSection.blogList;
    },
  },
  methods: {
    setNameList(num) {
      const fileName = num + 1;
      const result = String(fileName).padStart(2, "0");
      return result;
    },
    filterData(filter) {
      if (filter !== "all") {
        const result = this.blogData.filter((el) => {
          return el.tag.findIndex((elTag) => elTag === filter) > -1;
        });
        this.blogList = result;
      } else {
        this.blogList = this.blogData;
      }
    },
  },
  mounted() {
    this.blogList = this.blogData;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/blog/blog.scss";
</style>
