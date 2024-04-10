export const state = () => ({
  /**
   * date: Date.now();
   * name: String,
   * email: String,
   * phone: String,
   * message: String
   */
  contactList: []
})

export const mutation = () => ({
  SAVE_CONTACTINFO(state, contactInfo){
    state.contactList.push(contactInfo)
  }
})

export const action = () => ({
  savingContactInfo({commit}, contactInfo){
    commit('SAVE_CONTACTINFO', contactInfo)
  }
})