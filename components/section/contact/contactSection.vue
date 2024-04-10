<template>
  <div class="contact">
    <h2 class="contact__title txt_h1">
      get in touch
      <i class="ico__ball"></i>
    </h2>
    <div class="contact__bg">
      <svg
        class="contact__dog"
        style="display: None"
        xmlns="http://www.w3.org/2000/svg"
        width="1370"
        height="1050"
        fill="none"
      >
        <g clip-path="url(#a)">
          <rect
            width="409.53"
            height="409.53"
            x="-11.461"
            y="78.352"
            fill="#EDEDDE"
            rx="204.765"
            transform="rotate(-4.11 -11.461 78.352)"
          />
          <rect
            width="341.066"
            height="341.066"
            x="244.538"
            y="24.443"
            fill="#EDEDDE"
            rx="170.533"
            transform="rotate(-4.11 244.538 24.443)"
          />
          <rect
            width="416.85"
            height="416.85"
            x="902.801"
            y="101.561"
            fill="#EDEDDE"
            rx="208.425"
            transform="rotate(29.952 902.801 101.561)"
          />
          <rect
            width="324.964"
            height="324.964"
            x="1143.79"
            y="178.001"
            fill="#EDEDDE"
            rx="162.482"
            transform="rotate(29.952 1143.79 178.001)"
          />
          <rect
            width="918"
            height="793.67"
            x="110.539"
            y="256.331"
            fill="#EDEDDE"
            rx="396.835"
          />
          <path
            stroke="#2B6786"
            stroke-linecap="round"
            stroke-width="16"
            d="M630.454 326.038s-3.31-35.631 18.815-69.744c22.544-34.759 42.245-47.293 42.245-47.293m-2.975 116.586s10.198-28.632 35.803-47.402c26.09-19.126 42.745-22.069 42.745-22.069m152.452 553.025s34.847-8.132 71.657 9.14c37.504 17.6 52.604 35.409 52.604 35.409m-140.261-6.689s33.01-1.854 63.537 19.011c31.104 21.259 41.824 39.282 41.824 39.282"
          />
          <path
            fill="#2B6786"
            d="M423.147 653.174c-34.287.467-87.147 0-87.147 32.444 0 51.858 53.54 83.573 105 80.385 38.313-2.374 84.102-46.616 75-80.385-9.322-34.581-57.098-32.93-92.853-32.444Z"
          />
          <ellipse cx="400" cy="525.002" fill="#fff" rx="64" ry="97">
            <circle
              cx="359"
              cy="478.002"
              r="22"
              fill="#2D2D2D"
              ref="dogEyeLeft"
            />
          </ellipse>
          <ellipse cx="528" cy="525.002" fill="#fff" rx="64" ry="97">
            <circle
              cx="486"
              cy="478.002"
              r="22"
              fill="#2D2D2D"
              ref="dogEyeRight"
            />
          </ellipse>
        </g>
        <defs>
          <clipPath id="a"><path fill="#fff" d="M0 0h1370v1050H0z" /></clipPath>
        </defs>
      </svg>
    </div>
    <div class="contact__form_wrap">
      <h4 class="txt_h4">got a question?</h4>
      <div class="contact__form">
        <input
          type="text"
          class="contact__input"
          v-model="contactName"
          placeholder="name"
        />
        <input
          type="text"
          class="contact__input"
          v-model="contactEmail"
          placeholder="email"
        />
        <input
          type="text"
          class="contact__input"
          v-model="contactPhone"
          placeholder="phone"
        />
        <textarea
          type="text"
          class="contact__input"
          v-model="contactMessage"
          placeholder="message"
        ></textarea>
        <button class="contact__btn contact__btn-submit">done!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactSection",
  data() {
    return {
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      contactMessage: "",
    };
  },
  methods: {
    async saveContactINfo() {
      try {
        const contactInfo = {
          date: Date.now(),
          contactName: this.contactName,
          contactEmail: this.contactEmail,
          contactPhone: this.contactPhone,
          contactMessage: this.contactMessage,
        };
        await this.$store.dispatch(
          "contactInfo/savingContactInfo",
          contactInfo
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/section/contact/contact.scss";
</style>
