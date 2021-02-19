<template>
  <div>
    <div class="page-title">
      <h3>Главная</h3>

    </div>

    <Loader v-if="loading" />

<!-- Вывод записей циклом через тег v-for-->
      <tbody v-for="(record) in records.reverse()" :key="record.id">

        <div class="divider"></div>
        <div class="section">
          <h5>{{ record.title }}</h5>
          <p>{{ record.description }}</p>
        </div>

      </tbody>

  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    loading: true,
    records: []
  }),
  // вытаскивание данных бд из файла record, и отображение страницы после прогрузки всех данных
  async mounted() {
    this.records = await this.$store.dispatch('fetchRecords')
    this.loading = false
  },
}
</script>
