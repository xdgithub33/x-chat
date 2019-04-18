import accountApi from '../../api/accout'

const actions = {
  login({ commit }: any, data: any) {
    return new Promise((resolve, reject) => {
      accountApi.login(data).then(
        (res: any) => {
          resolve(res)
        },
        (err: any) => {
          reject(err)
        },
      )
    })
  },
}
const state = {}
const getters = {}
const mutations = {}

export default {
  state,
  getters,
  mutations,
  actions,
}
