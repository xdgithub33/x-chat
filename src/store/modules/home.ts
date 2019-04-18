import CONST from '../const'
const state = {
  title: '',
  active: 0,
}
const mutations = {}
const actions = {}
const getters = {
  active(state: any, getter: any) {
    return state.active
  },
  title(state: any, getter: any) {
    return state.title
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
