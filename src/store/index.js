import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageNum: 1
  },
  getters: {
    page: state => {
      return '第' + state.pageNum + '页'
    }
  },
  mutations: {
    updatePageNum(state, payload) {
      console.log(state, payload);
      state.pageNum = payload.page;
    }
  },
  modules: {

  }
})