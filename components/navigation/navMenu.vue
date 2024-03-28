<template>
  <nav>
    <div class="logo"></div>
    <button class="btn-close">CLOSE</button>
    <ul class="menu__list">
      <li class="menu__lst" v-for="(navMenu, idx) in navMenuList" :key="idx">
        <button @click="goToPage(navMenu.link)">{{ navMenu.txt }}</button>
      </li>
    </ul>
    <div class="sns__list">
      <button>인스타그램</button>
      <button>틱톡</button>
      <button>whatsapp</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navMenu',
  data(){
    return{}
  },
  methods:{
    goToPage(page) {
      this.$router.push({
        path: page,
      });
    },
  },
  computed:{
    navMenuList(){
      this.$store.state.navHeader.navHeaderList;
    }
  }
}
</script>

<style>

</style>