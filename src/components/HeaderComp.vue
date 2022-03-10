<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a class="link active" href="#">Конвертер</a>
        <a class="link" href="#">Курс валют</a>
        <select v-model="base_currency" @change="printRates">
          <option disabled :value="base_currency">{{ base_currency }}</option>
          <option
            v-for="(currency, index) in currencies"
            :value="currency"
            :key="index"
          >
            {{ currency }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HeaderComp',
  data() {
    return {
      base_currency: 'RUB',
      currencies: [],
      rates_data: null
    }
  },
  methods: {
    printRates() {
      axios
      .get(`https://freecurrencyapi.net/api/v2/latest?apikey=21a22640-9887-11ec-9769-bf6cd6ccb580&base_currency=${this.base_currency.toUpperCase()}`)
      .then(response => this.rates_data = response.data.data)
    }
  },
  mounted() {
    axios
      .get('https://free.currconv.com/api/v7/currencies?apiKey=8f9449565df67eb8519d')
      .then(response => {
        for(let key in response.data.results) {
          this.currencies.push(key)
        }
        console.log('mounted')
      })
  }
}
</script>

