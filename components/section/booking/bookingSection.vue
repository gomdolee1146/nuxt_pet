<template>
  <div class="booking">
    <div class="booking__wrap">
      <button
        class="booking__btn-back txt_btn_large"
        v-if="this.step !== 1"
        @click="goToPrev"
      >
        Back
        <i class="ico__arrow-right"></i>
      </button>
      <div class="booking__box" v-if="this.step === 1">
        <h4 class="booking__title txt_h5">
          {{ bookingQuestion[0].title }}
        </h4>
        <select class="booking__select" v-model="optionGroup.option">
          <option
            v-for="(options, idx) in bookingQuestion[0].selectOption"
            :key="idx"
          >
            {{ options }}
          </option>
        </select>
      </div>
      <div class="booking__box" v-if="this.step === 2">
        <h4 class="booking__title txt_h5">
          {{ bookingQuestion[1].title }}
        </h4>
        <input
          type="text"
          class="booking__input"
          v-model="optionGroup.dogName"
        />
      </div>
      <div class="booking__box" v-if="this.step === 3">
        <h4 class="booking__title txt_h5">
          {{ bookingQuestion[2].title }}
        </h4>
        <input type="text" class="booking__input" v-model="optionGroup.time" />
      </div>
      <div class="booking__box" v-if="this.step === 4">
        <h4 class="booking__title txt_h5">
          {{ bookingQuestion[3].title }}
        </h4>
        <div
          class="booking__check_box"
          v-for="(options, idx) in bookingQuestion[3].selecOption"
          :key="idx"
        >
          <input
            type="checkbox"
            class="booking__check"
            :value="idx"
            v-model="optionGroup.meetBefore"
          />
          <label class="booking__label"><i></i>{{ options }}</label>
        </div>
      </div>
      <div class="booking__box" v-if="this.step === 5">
        <h4 class="booking__title txt_h5">
          {{ bookingQuestion[4].title }}
        </h4>
        <div class="booking__input_wrap">
          <textarea
            placeholder=""
            class="booking__textarea"
            v-model="optionGroup.moreInfo"
          ></textarea>
        </div>
      </div>
      <div class="booking__box" v-if="this.step === 6">
        <h4 class="booking__title txt_h5">
          {{ bookingQuestion[5].title }}
        </h4>
        <div class="booking__input_wrap">
          <input
            type="text"
            class="booking__input"
            v-model="optionGroup.ownerName"
          />
          <input
            type="text"
            class="booking__input"
            v-model="optionGroup.ownerPhone"
          />
          <input
            type="text"
            class="booking__input"
            v-model="optionGroup.ownerMail"
          />
        </div>
      </div>

      <button
        class="booking__btn-next txt_h8"
        :class="isActive ? 'on' : ''"
        @click="goToNext"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookingSection",
  data() {
    return {
      step: 1,
      isActive: false,

      optionGroup: {
        option: "",
        dogName: "",
        time: "",
        meetBefore: "",
        moreInfo: "",
        ownerName: "",
        ownerPhone: "",
        ownerMail: "",
      },
    };
  },
  methods: {
    goToPrev() {
      if (this.step < 1) {
        console.log("확인필요함");
      } else {
        this.step--;
      }
    },
    async goToNext() {
      if (this.step > 6) {
        try {
          const bookData = {
            date: Date.now(),
            option: this.optionGroup.option,
            dogName: this.optionGroup.dogName,
            time: this.optionGroup.time,
            meetBefore: this.optionGroup.meetBefore,
            moreInfo: this.optionGroup.moreInfo,
            ownerName: this.optionGroup.ownerName,
            ownerPhone: this.optionGroup.ownerPhone,
            ownerMail: this.optionGroup.ownerMail,
          };
          await this.$store.dispatch(
            "bookingSection/saveBookingInfo",
            bookData
          );
          this.$router.push({
            path: "/", // 완료 페이지 필요
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        this.step++;
        this.isActive = false;
      }
    },
  },
  computed: {
    bookingQuestion() {
      return this.$store.state.bookingSection.questionList;
    },
    toggleButtonColor() {
      for (let i = 0; i < this.step; i++) {
        if (this.optionGroup[i] == "") this.isActive = false;
        else this.isActive = true;
      }
      // this.isActive = e.target.value === '' ? false : true
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/booking/booking.scss";
</style>
