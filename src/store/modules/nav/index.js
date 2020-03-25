export default {
  namespaced: true,
  state: {
    headNavActive: '1',
    sideNavActive: '1',
    openNames: []
  },
  getters: {},
  mutations: {
    updateScreenHeight(state, payload) {
      state.screenHeight = payload.screenHeight;
    }
  },
  actions: {}
}