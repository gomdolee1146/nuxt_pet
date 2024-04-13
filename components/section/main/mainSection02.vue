<template>
  <div class="main">
    <div class="main__title txt_h1">Our services</div>
    <div class="ico_box">
      <i class="ico__arrow-down"></i>
    </div>
    <div class="main__list">
      <div
        class="main__list_num txt_h2"
        v-for="(num, idx) in mainService.mainNum"
        :key="idx"
      >
        <template v-if="showContent(idx)">
          {{ num }}
        </template>
      </div>
      <div
        class="main__list_thumb"
        v-for="(num, idx) in mainService.mainNum"
        :key="idx"
      >
        <img
          :src="require(`~/assets/imgs/service/service_${num}.png`)"
          ref="mainThumb"
        />
        <button class="main__btn-book ani__ball">
          <span class="ani__ball-txt">
            <i class="ani__ball-l"></i>
            BOOK NOW!
            <i class="ani__ball-r"></i>
          </span>
        </button>
      </div>
      <div class="main__list_box main__list-lb">
        <div class="main__progress">
          <div class="main__progress_bg"></div>
          <div class="main__progress_bar" style="width: 10%"></div>
        </div>
        <div
          class="main__list_title txt_h2"
          v-for="(title, idx) in mainService.mainTitle"
          :key="idx"
        >
          <template v-if="showContent(idx)">
            {{ title }}
          </template>
        </div>
      </div>
      <div class="main__icons">
        <button
          class="main__ico"
          :class="{ 'on': showContent(idx), icons }"
          v-for="(icons, idx) in mainService.mainIco"
          :key="idx"
          @click="changeContent(idx)"
        ></button>
      </div>
    </div>
    <div class="main__circle"></div>
  </div>
</template>

<script>
export default {
  name: "mainSection02",
  data() {
    return {
      mainNum: "",
      mainTitle: "",
      mainThumb: "",
      mainIco: "",

      indexNum: 0,
    };
  },
  computed: {
    mainService() {
      const { num, title, thumb, buttonClass } =
        this.$store.state.mainSection.serviceList;
      return {
        mainNum: num,
        mainTitle: title,
        mainThumb: thumb,
        mainIco: buttonClass,
      };
    },
  },

  mounted() {
  },

  methods: {
    getNumber() {
      if (this.indexNum >= 2) {
        this.indexNum = 0;
      } else {
        this.indexNum++;
      }
    },

    showContent(idx) {
      if (this.indexNum === idx) return true;
      else return false;
    },
    changeContent(idx){
      this.indexNum = idx;
    } 
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/main/mainCommon.scss";
@import "@/assets/scss/components/section/main/main02.scss";
</style>
