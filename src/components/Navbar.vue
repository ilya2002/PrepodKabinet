<template>
  <nav class="navbar teal accent-3">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">Сегодня: {{date | date('date')}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
              ref="dropdown"
          >
            <img style="position: absolute;width: 3em; margin: 1em 0 0 -4em; border-radius: 50% " src="../assets/img/photo.png">
<!-- Вывод данных пользователя            -->
            <router-link to="/profile" class="black-text">
              {{name}} {{secondName}}
            </router-link>
          </a>
        <li>
          <a href="#" class="black-text" @click.prevent="logout">Выйти
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
  }),
  methods: {
    // Осуществление выхода
    logout: async function () {
      await this.$store.dispatch('logout')
      // Вывод сообщения о выходе
      this.$router.push('/login?message=logout')
    }
  },
  // Вывод данных из бд
  computed: {
    name() {
      return this.$store.getters.info.name
    },
    secondName() {
      return this.$store.getters.info.secondName
    }
  },
  mounted() {
    // при изменении даты на новое, замена его на странице
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
  }
}
</script>
