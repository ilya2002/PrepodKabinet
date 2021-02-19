<template>
  <div class="grey darken-1 empty-layout">
<!--    вывод страницы указаной в route-->
    <router-view />
  </div>
</template>

<script>
import messages from '@/utils/messages'

export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  // При непредвиденной ошибки на странице выводится данное сообщение
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'Что-то пошло не так')
    }
  }
}
</script>
