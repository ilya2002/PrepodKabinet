import firebase from '@firebase/app'

export default {
  actions: {
    //экшен для создания записи
    async createRecord({commit}, record) {
      try {
        return await firebase.database().ref(`/users/records`).push(record)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchRecords({ commit}) {
      try {
        const records = (await firebase.database().ref(`/users/records`).once('value')).val() || {}
        return Object.keys(records).map(key => ({...records[key], id: key}))
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
