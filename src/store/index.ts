import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './actions'
import Getters from './getters'
import ShoppingMall from './modules/shoppingMall'
import Home from './modules/home'
import Account from './modules/account'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: Actions,
  getters: Getters,
  modules: {
    Home,
    ShoppingMall,
    Account,
  },
})
