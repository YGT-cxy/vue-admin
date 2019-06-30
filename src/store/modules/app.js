const state = {
  appName: 'vue开发的后台管理系统'
}

const mutations = {
  SET_APP_NAME: (state, params) => {
    // console.log(state)
    // console.log(params)
    state.appName = params
  }
}

const actions = {
  setAppName: ({ commit }, params) => {
    // console.log(params)
    // console.log(commit)
    commit('SET_APP_NAME', params)
  }
}

export default {
  namespaced: true, // 开启命名空间
  state,
  mutations,
  actions
}
