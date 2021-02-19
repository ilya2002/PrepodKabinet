import firebase from '@firebase/app'

export default {
  actions: {
    // Авторизация
    async login({dispatch, commit}, {email, password}) {
      try {
        // Авторизация путём сравнения введных данных с данными из бд
        await firebase.auth().signInWithEmailAndPassword(email, password)
      }
          // Вывод ошибки при невозможности авторизации
      catch (e) {
        commit('setError', e)
        throw e
      }
    },
    // Регситрация
    async register({dispatch, commit}, {email, password, name, secondName}) {
      try {
        // Создание пользователя используя данные введеные на странице Register
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        // Создание user id
        const uid = await dispatch('getUid')
        // Добавление данных к созданному пользователю
        await firebase.database().ref(`/users/${uid}/info`).set({
          name,
          secondName
        })
      }
      // Вывод ошибки при невозможности регистрации
      catch (e) {
        commit('setError', e)
        throw e
      }
    },
    //проверка id пользователя для продолжении сессии
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    // Выход
    async logout({commit}) {
      await firebase.auth().signOut()
      commit('clearInfo')
    }
  }
}
