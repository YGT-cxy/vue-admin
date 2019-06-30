const getters = {
  app: (state) => {
    console.log(state)
    return state.app.appName
  }
}

export default getters
