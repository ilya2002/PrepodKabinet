<template>
  <div>
    <div class="page-title">
      <h3>Главная</h3>

    </div>

    <Loader v-if="loading" />
    <table>

      <tbody v-for="(record) in records.reverse()" :key="record.id">

        <div class="divider"></div>
        <div class="section">
          <h5>{{ record.title }}</h5>
          <p>{{ record.description }}</p>
        </div>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    loading: true,
    records: []
  }),
  async mounted() {
    this.records = await this.$store.dispatch('fetchRecords')
    this.loading = false
  },
  computed: {
    records()
    {
      return this.$store.getters.record.title
    }
  },
}
</script>
