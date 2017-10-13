/**
 * Created by shenalfred on 17/5/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isSelectStart: false
  },
  getters: {
    getSelectStart (state) {
      return state.isSelectStart
    }
  },
  mutations: {
    setIsSelectStart (state, value) {
      state.isSelectStart = value;
    }
  },
  actions: {

  }
})

export default store
