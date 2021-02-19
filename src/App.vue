<template>
  <div id="app">
<!--    Вывод layout's-->
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
  // установка layout's
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<!-- Подключение стилей к проекту -->
<style lang="css">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
