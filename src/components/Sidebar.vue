<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
<!-- ссылки меню-->
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
<!-- Вывод ссылок -->
      <a href="#" class="waves-effect waves-teal pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  // информация для ссылок меню
  data: () => ({
    links: [
      {title: 'Главная', url: '/', exact: true},
      {title: 'Мои курсы', url: '/mykursy'},
      {title: 'Расписание', url: '/schedule'},
      {title: 'Новая запись', url: '/record'},
      {title: 'Добавление пользователя', url: '/register'}
    ]
  })
}
</script>



