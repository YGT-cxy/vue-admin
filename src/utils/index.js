// 设置页面的标题
export function setPageTitle (title) {
  if (typeof title === 'string') {
    window.document.title = title
  } else {
    throw new Error('路由组件meta的title必须为字符串')
  }
}
