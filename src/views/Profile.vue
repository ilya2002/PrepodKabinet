<<template>
  <div>
    <div class="page-title">
      <h3>Данные пользователя</h3>
    </div>
<!-- поля для заполении формы измения данных пользователя-->
    <form class="form" @submit.prevent="submitHandler">
      <div class="input-field">
        <input
            id="description"
            type="text"
            v-model="name"
            :class="{invalid: $v.name.$dirty && !$v.name.required}"
        >
      </div>
      <div class="input-field">
        <input
            id="sN"
            type="text"
            v-model="secondName"
            :class="{invalid: $v.secondName.$dirty && !$v.secondName.required}"
        >
      </div>


      <button class="btn waves-effect waves-light" type="submit">
        Изменить
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    name: '',
    secondName: ''
  }),
  validations: {
    name: { required },
    secondName: { required }

  },  // вывод актуальной информации пользователя
  mounted() {
    this.name = this.info.name
    this.secondName = this.info.secondName
  },
  computed: {
    ...mapGetters(['info'])
  },
  methods: {
    // замена старой информации на новую
    ...mapActions(['updateInfo']),
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try {
        this.$message('Данные пользователя изменены')
        await this.updateInfo({
          name: this.name,
          secondName: this.secondName,
        })
      }
      // Вывод ошибки при невозможности изменения данных
      catch (e) {}
    }
  }
}
</script>
