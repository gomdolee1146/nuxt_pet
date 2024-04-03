<template>
  <div class="contact">
    <h2 class="contact__title txt_headline1">get in touch</h2>
    <div class="contact__bg">
    </div>
    <div class="contact__form_wrap">
      <h4 class="txt_headline4">got a question?</h4>
      <div class="contact__form">
        <input type="text" class="contact__input" v-model="contactName" />
        <input type="text" class="contact__input" v-model="contactEmail" />
        <input type="text" class="contact__input" v-model="contactPhone" />
        <textarea type="text" class="contact__input" v-model="contactMessage"></textarea>
      </div>
      <button class="contact__btn contact__btn-submit"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactSection',
  data(){
    return {
      contactName:'',
      contactEmail: '',
      contactPhone: '',
      contactMessage: '',
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/section/contact/contact.scss';
</style>