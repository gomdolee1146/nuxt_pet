<template>
  <div class="booking">
    <button class="booking__btn-back" v-if="this.step !== 1" @click="goToPrev">Back</button>
    <div class="booking__wrap" v-if="this.step === 1">
      <h4 class="booking__title">Choose your Selection</h4>
      <select class="booking__select">
        <option>{{  }}</option>
      </select>
    </div>
    <div class="booking__wrap" v-if="this.step === 2">
      <h4 class="booking__title">your dog name?</h4>
      <input type="text" class="booking__input" v-model="bookingName" />
    </div>
    <div class="booking__wrap" v-if="this.step === 3">
      <h4 class="booking__title"></h4>
      <input type="text" class="booking__input" v-model="bookingTime" />
    </div>
    <div class="booking__wrap" v-if="this.step === 4">
      <h4 class="booking__title">When do you want to meet a potential walk?</h4>
      <div class="booking__check_wrap">
        <span class="booking__check_box">
          <input
            type="checkbox"
            class="booking__check"
            v-model="bookingMeetBefore"
          />
          <label class="booking__label">선택지1</label>
        </span>
      </div>
    </div>
    <div class="booking__wrap" v-if="this.step === 5">
      <h4 class="booking__title">we also need to know that...</h4>
      <div class="booking__input_wrap">
        <textarea
          placeholder=""
          class="booking__textarea"
          v-model="bookingMoreInfo"
        ></textarea>
      </div>
    </div>
    <div class="booking__wrap" v-if="this.step === 6">
      <h4 class="booking__title">Your name, your phone and your mail</h4>
      <div class="booking__input_wrap">
        <input type="text" class="booking__input" v-model="bookingName" />
        <input type="text" class="booking__input" v-model="bookingPhone" />
        <input type="text" class="booking__input" v-model="bookingMail" />
      </div>
    </div>

    <button class="booking__btn-next" @click="goToNext">Next</button>
  </div>
</template>

<script>
export default {
  name: "bookingSection",
  data() {
    return {
      step: 1,
      bookingName: "",
      bookingTime: "",
      bookingMeetBefore: "",
      bookingMoreInfo: "",
      bookingName: "",
      bookingPhone: "",
      bookingMail: "",
    };
  },
  method: {
    goToPrev(){
      if (this.step < 1){
        console.log('확인필요함')
      } else {
        this.step--;
      }
    },
    goToNext(){
      if (this.step > 6){
        this.$router.push({
          path: '/', // 완료 페이지 필요
        })
      } else {
        this.step++;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/booking/booking.scss";
</style>
