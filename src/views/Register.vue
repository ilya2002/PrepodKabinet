<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Регистрация нового пользователя</span>
<!--      поле ввода email и проверка его по критериям-->
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <!--        Критерии для email-->
        <small
            class="helper-text invalid"
            v-if="$v.email.$dirty && !$v.email.required"
        >Поле Email не должно быть пустым</small>
        <small
            class="helper-text invalid"
            v-else-if="$v.email.$dirty && !$v.email.email"
        >Введите корретный Email</small>
      </div>
      <!--      поле ввода email и проверка его по критериям-->
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label for="password">Пароль</label>
<!--        Критерии для пароля-->
        <small
            class="helper-text invalid"
            v-if="$v.password.$dirty && !$v.password.required"
        >
          Введите пароль
        </small>
        <small
            class="helper-text invalid"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}
        </small>
      </div>
      <!--      поле ввода имени и проверка его по критериям-->
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model.trim="name"
            :class="{invalid: $v.name.$dirty && !$v.name.required}"
        >
        <label for="name">Имя</label>
        <!--        Критерии для имени-->
        <small
            class="helper-text invalid"
            v-if="$v.name.$dirty && !$v.name.required"
        >
          Введите ваше имя
        </small>
      </div>
      <!--      поле ввода фамилии и проверка его по критериям-->
      <div class="input-field">
        <input
            id="secondName"
            type="text"
            v-model.trim="secondName"
            :class="{invalid: $v.secondName.$dirty && !$v.secondName.required}"
        >
        <label for="name">Фамилия</label>
        <!--        Критерии для фамилии-->
        <small
            class="helper-text invalid"
            v-if="$v.secondName.$dirty && !$v.secondName.required"
        >
          Введите вашу фамилию
        </small>
      </div>
    </div>
<!--   кнопка -->
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Добавить пользователя
        </button>
      </div>

    </div>
  </form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'register',
  data: () => ({
    email: '',
    password: '',
    name: '',
    secondName: ''
  }),
  // валидация
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
    name: {required},
    secondName: {required}
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      // создание данных
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        secondName: this.secondName
      }
      // переход на главную страницу при удачной регистрации
      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/')
      } catch (e) {}
    }
  }
}
</script>
