export const state = () => ({
  questionList: [
    {
      step: 1,
      title: "Choose Your Selection",
      selectOption: [
        "Singular Walks",
        "Twice a week",
        "Three times a week",
        "Four times a week",
      ],
      placeholder: 'select option'
    },
    {
      step: 2,
      title: "Your Dog Name? :)",
      placeholder: "enter name",
    },
    {
      step: 3,
      title: "How long does a pet need to walk?",
      placeholder: "enter value",
    },
    {
      step: 4,
      title: "When do you want to meet a potential walk?",
      selectOption: [
        "on the first test run",
        "i want to contact before the first walk",
        "no introduction required",
      ],
    },
    {
      step: 5,
      title: "We also need to know that...",
      placeholder: "enter your message",
    },
    {
      step: 6,
      title: "Your name, your phone and your mail",
      namePlaceholder: "your name",
      phonePlaceholder: "your phone",
      mailPlaceholder: "your mail",
    },
  ],
  userAnswerList: [
    {
      date: Date.now(),
      option: "",
      dogName: "",
      bookingTime: "",
      meetBefore: "",
      moreInfo: "",
      ownerName: "",
      ownerPhone: "",
      ownerMail: "",
    },
  ],
});


export const mutation = () => ({
  SAVE_BOOKINFO(state, bookInfo){
    state.userAnswerList.push(bookInfo)
  }
})  

export const action = () => ({
  saveBookingInfo({commit}, bookInfo){
    commit('SAVE_BOOKINFO', bookInfo)
  }
})