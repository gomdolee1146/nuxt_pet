<template>
  <div class="booking">
    <button class="booking__btn-back" v-if="this.step !== 1" @click="goToPrev">
      Back
    </button>
    <div class="booking__wrap" v-if="this.step === 1">
      <h4 class="booking__title">{{ bookingQuestion[0].title }}</h4>
      <select class="booking__select" v-model="bookingOption">
        <option v-for="(options, idx) in bookingQuestion[0].selectOption" :key="idx">
          {{ options }}
        </option>
      </select>
    </div>
    <div class="booking__wrap" v-if="this.step === 2">
      <h4 class="booking__title">{{ bookingQuestion[1].title }}</h4>
      <input type="text" class="booking__input" v-model="bookingDogName" />
    </div>
    <div class="booking__wrap" v-if="this.step === 3">
      <h4 class="booking__title">{{ bookingQuestion[2].title }}</h4>
      <input type="text" class="booking__input" v-model="bookingTime" />
    </div>
    <div class="booking__wrap" v-if="this.step === 4">
      <h4 class="booking__title">{{ bookingQuestion[3].title }}</h4>
      <div class="booking__check_wrap">
        <span
          class="booking__check_box"
          v-for="(options, idx) in bookingQuestion[3].selecOption"
          :key="idx"
        >
          <input
            type="checkbox"
            class="booking__check"
            :value="idx"
            v-model="bookingMeetBefore"
          />
          <label class="booking__label">{{ options }}</label>
        </span>
      </div>
    </div>
    <div class="booking__wrap" v-if="this.step === 5">
      <h4 class="booking__title">{{ bookingQuestion[4].title }}</h4>
      <div class="booking__input_wrap">
        <textarea
          placeholder=""
          class="booking__textarea"
          v-model="bookingMoreInfo"
        ></textarea>
      </div>
    </div>
    <div class="booking__wrap" v-if="this.step === 6">
      <h4 class="booking__title">{{ bookingQuestion[5].title }}</h4>
      <div class="booking__input_wrap">
        <input type="text" class="booking__input" v-model="bookingName" />
        <input type="text" class="booking__input" v-model="bookingPhone" />
        <input type="text" class="booking__input" v-model="bookingMail" />
      </div>
    </div>

    <button class="booking__btn-next">Next</button>
  </div>
</template>

<script>
export default {
  name: "bookingSection",
  data() {
    return {
      step: 1,
      bookingOption: "",
      bookingDogName: "",
      bookingTime: "",
      bookingMeetBefore: "",
      bookingMoreInfo: "",
      bookingName: "",
      bookingPhone: "",
      bookingMail: "",

      userAnswer: {},
    };
  },
  method: {
    goToPrev() {
      if (this.step < 1) {
        console.log("확인필요함");
      } else {
        this.step--;
      }
    },
    goToNext() {
      if (this.step > 6) {
        this.$router.push({
          path: "/", // 완료 페이지 필요
        });
      } else {
        this.step++;
      }
    },
  },
  computed: {
    bookingQuestion() {
      return this.$store.state.bookingSection.questionList;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/booking/booking.scss";
</style>
