<template>
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>

    <Loader v-if="loading" />
    <!--      поле ввода заголовка и проверка его по критериям-->
    <form class="form" v-else @submit.prevent="handleSubmit">
      <div class="input-field">
        <input
          id="title"
          type="text"
          v-model="title"
          :class="{invalid: $v.title.$dirty && !$v.title.required}"
        >
        <label for="title">Заголовок</label>
<!--        Критерии -->
        <span
          v-if="$v.title.$dirty && !$v.title.required"
          class="helper-text invalid"
        >
            Нужно ввести заголовок
          </span>
      </div>
      <!--      поле ввода описания и проверка его по критериям-->
      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="description"
          :class="{invalid: $v.description.$dirty && !$v.description.required}"
        >
        <label for="description">Описание</label>
<!--        критерии -->
        <span
          v-if="$v.description.$dirty && !$v.description.required"
          class="helper-text invalid"
        >
            Нужно ввести описание
          </span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
      </button>
    </form>
  </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
import {mapGetters} from 'vuex'
export default {
  name: 'record',
  data: () => ({
    loading: true,
    select: null,
    title: '',
    description: '',
  }),
  // Валидация
  validations: {
    title: {required},
    description: {required}
  },
  async mounted() {
    this.loading = false
  },
  computed: {
    canCreateRecord() {
        return true
    }
  },
  methods: {
    async handleSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      // Создание записи и добаление введеных даныых в бд
      if (this.canCreateRecord) {
        try {
          await this.$store.dispatch('createRecord', {
            title: this.title,
            description: this.description,
          })
          // сценарии при успешном создании записи
          this.$message('Запись успешно создана')
          this.$v.$reset()
          this.title = ''
          this.description = ''
        } catch (e) {}
      }
      // сценарий при не удачной попытке создать запись
      else {
        this.$message(`Произошла не предвиденная ошибка`)
      }
    }
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy()
    }
  }
}
</script>

