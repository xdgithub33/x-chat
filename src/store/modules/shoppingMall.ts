import goodApi from '../../api/goods'

const actions = {
  getGoodsList({ commit }: any, params: any) {
    return new Promise((resolve, reject) => {
      goodApi.getGoodsList(params).then(
        res => {
          resolve(res)
        },
        err => {
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
