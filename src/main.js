import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyDTf7zyB6m6TJocVVBpt_4nPHh_wNNXf4g",
  authDomain: "teacher-office.firebaseapp.com",
  databaseURL: "https://teacher-office-default-rtdb.firebaseio.com",
  projectId: "teacher-office",
  storageBucket: "teacher-office.appspot.com",
  messagingSenderId: "722746347774",
  appId: "1:722746347774:web:7b9d6a63bb68243410d5af",
  measurementId: "G-DYL3H2C3LC"

})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

