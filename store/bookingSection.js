export const state = () => ({
  questionList: [
    {
      step: 1,
      vModel: "bookingOption",
      title: "Choose Your Selection",
      selectOption: [
        "Singular Walks",
        "Twice a week",
        "Three times a week",
        "Four times a week",
      ],
    },
    {
      step: 2,
      vModel: "bookingDogName",
      title: "Your Dog Name? :)",
      placeholder: "",
    },
    {
      step: 3,
      vModel: "bookingTime",
      title: "How long does a pet need to walk?",
      placeholder: "",
    },
    {
      step: 4,
      vModel: "bookingMeetBefore",
      title: "When do you want to meet a potential walk?",
      selectOption: ["on the first test run", 'i want to contact before the first walk', 'no introduction required'],
    },
    {
      step: 5,
      vModel: "bookingMoreInfo",
      title: "We also need to know that...",
      placeholder: "",
    },
    {
      step: 6,
      vModelName: "bookingName",
      vModelPhone: "bookingPhone",
      vModelMail: "bookingMail",
      title: "Your name, your phone and your mail",
      placeholder: "",
    },
  ],
});


