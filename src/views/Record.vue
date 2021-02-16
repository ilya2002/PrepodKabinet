<template>
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>

    <Loader v-if="loading" />

    <form class="form" v-else @submit.prevent="handleSubmit">
      <div class="input-field">
        <input
          id="title"
          type="text"
          v-model="title"
          :class="{invalid: $v.title.$dirty && !$v.title.required}"
        >
        <label for="title">Заголовок</label>
        <span
          v-if="$v.title.$dirty && !$v.title.required"
          class="helper-text invalid"
        >
            Введите заголовок
          </span>
      </div>

      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="description"
          :class="{invalid: $v.description.$dirty && !$v.description.required}"
        >
        <label for="description">Описание</label>
        <span
          v-if="$v.description.$dirty && !$v.description.required"
          class="helper-text invalid"
        >
            Введите описание
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
  validations: {
    title: {required},
    description: {required}
  },
  async mounted() {
    this.loading = false
  },
  computed: {
    ...mapGetters(['info']),
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

      if (this.canCreateRecord) {
        try {
          await this.$store.dispatch('createRecord', {
            title: this.title,
            description: this.description,
          })
          await this.$store.dispatch('updateInfo')
          this.$message('Запись успешно создана')
          this.$v.$reset()
          this.title = ''
          this.description = ''
        } catch (e) {}
      } else {
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

