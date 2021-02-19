import store from '../store'

export default function dateFilter(value, format = 'date') {
  const options = {}
  //формат даты
  if (format.includes('date')) {
    options.day = '2-digit'
    options.month = 'long'
    options.year = 'numeric'
  }
  // локализация даты
  const locale = store.getters.info || 'ru-RU'
  return new Intl.DateTimeFormat(locale, options).format(new Date(value))
}
