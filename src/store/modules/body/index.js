export default {
  namespaced: true,
  state: {
    screenHeight: (document.documentElement.clientHeight || document.body.clientHeight),
    themeColor: '#5cadff'
  },
  getters: {},
  mutations: {
    updateScreenHeight(state, payload) {
      state.screenHeight = payload.screenHeight;
    },
    updateThemeColor(state, payload) {
      state.themeColor = payload.themeColor;
    }
  },
  actions: {}
}