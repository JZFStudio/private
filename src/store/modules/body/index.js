export default {
  namespaced: true,
  state: {
    screenHeight: (document.documentElement.clientHeight || document.body.clientHeight)
  },
  getters: {},
  mutations: {
    updateScreenHeight(state, payload) {
      state.screenHeight = payload.screenHeight;
    }
  },
  actions: {}
}