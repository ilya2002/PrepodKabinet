export default {
  // Создание сообщения
  install(Vue, options) {
    Vue.prototype.$message = function(html) {
      M.toast({html})
    }
    // Создание сообщения об ошибки
    Vue.prototype.$error = function(html) {
      M.toast({html: `${html}`})
    }
  }
}
