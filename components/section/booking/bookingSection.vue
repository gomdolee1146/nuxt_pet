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
      <transition name="content-up">
        <div class="booking__box" v-if="step === 1">
          <h4 class="booking__title txt_h5">
            {{ bookingQuestion[0].title }}
          </h4>
          <select class="booking__select" v-model="optionGroup.option" required>
            <option value="" disabled selected>
              {{ bookingQuestion[0].placeholder }}
            </option>
            <option
              v-for="(options, idx) in bookingQuestion[0].selectOption"
              :key="idx"
              :value="idx"
            >
              {{ options }}
            </option>
          </select>
        </div>
      </transition>

      <transition name="content-up">
        <div class="booking__box" v-if="step === 2">
          <h4 class="booking__title txt_h5">
            {{ bookingQuestion[1].title }}
          </h4>
          <input
            type="text"
            class="booking__input"
            :placeholder="bookingQuestion[1].placeholder"
            v-model="optionGroup.dogName"
          />
        </div>
      </transition>

      <transition name="content-up">
        <div class="booking__box" v-if="step === 3">
          <h4 class="booking__title txt_h5">
            {{ bookingQuestion[2].title }}
          </h4>
          <input
            type="text"
            class="booking__input"
            :placeholder="bookingQuestion[2].placeholder"
            v-model="optionGroup.time"
          />
        </div>
      </transition>

      <transition name="content-up">
        <div class="booking__box" v-if="step === 4">
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
      </transition>

      <transition name="content-up">
        <div class="booking__box" v-if="step === 5">
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
      </transition>

      <transition name="content-up">
        <div class="booking__box" v-if="step === 6">
          <h4 class="booking__title txt_h5">
            {{ bookingQuestion[5].title }}
          </h4>
          <div class="booking__input_wrap">
            <input
              type="text"
              class="booking__input"
              :placeholder="bookingQuestion[5].namePlaceholder"
              v-model="optionGroup.ownerName"
            />
            <input
              type="text"
              class="booking__input"
              :placeholder="bookingQuestion[5].phonePlaceholder"
              v-model="optionGroup.ownerPhone"
            />
            <input
              type="text"
              class="booking__input"
              :placeholder="bookingQuestion[5].mailPlaceholder"
              v-model="optionGroup.ownerMail"
            />
          </div>
        </div>
      </transition>

      <button
        class="booking__btn-next txt_h8"
        :class="isActive ? 'on' : ''"
        @click="goToNext"
        :disabled="!isActive"
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
        this.isActive = false;
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
    setIsActive() {
      if (this.step === 1 && this.optionGroup.option !== "") {
        this.isActive = true;
      } else if (this.step === 2 && this.optionGroup.dogName !== "") {
        this.isActive = true;
      } else if (this.step === 3 && this.optionGroup.time !== "") {
        this.isActive = true;
      } else if (this.step === 4 && this.optionGroup.meetBefore !== "") {
        this.isActive = true;
      } else if (this.step === 5 && this.optionGroup.moreInfo !== "") {
        this.isActive = true;
      } else if (
        this.step === 6 &&
        this.optionGroup.ownerName !== "" &&
        this.optionGroup.ownerMail !== "" &&
        this.optionGroup.ownerPhone !== ""
      ) {
        this.isActive = true;
      }
    },
  },
  computed: {
    bookingQuestion() {
      return this.$store.state.bookingSection.questionList;
    },
  },
  updated() {
    this.setIsActive();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/booking/booking.scss";
</style>
