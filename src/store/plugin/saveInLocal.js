export const saveInLocal = state => {
  console.log(state)
  console.log('state初始化')
  if (localStorage.getItem('state')) state.replaceState(JSON.parse(localStorage.getItem('state')))
  state.subscribe((mutations, state) => {
    console.log(mutations) // {type: 'key', payload: 'value'} 通过判断这个可以设置哪些数据需要持久化缓存
    console.log(state)
    localStorage.setItem('state', JSON.stringify(state))
  })
}
