<template>
    <div class="rates_currencies">
        <div class="rates_currencies__inner">
            <p class="title">Курс валюты</p>

            <select v-model="baseCurrency" @change="printRates" class="select">
                <option
                    v-for="(item, index) in currencies"
                    :value="item"
                    :key="index"
                >
                {{ item.currency }} - {{ item.name }}
                </option>
            </select>

            <p v-if="isLoading" class="msg">{{ msg }}</p>
            <div v-else class="items">
                <div class="item" 
                    v-for="(value, key, index) in ratesData"
                    :key="index"
                >
                1 {{ key }} = {{ (1 / value).toFixed(4) }} {{ baseCurrency.currency.toUpperCase() }}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'RatesCurrencies',
    data() {
        return {
            // Базовая валюта
            baseCurrency: {
                currency: 'RUB',
                name: 'Рубль российский'
            },
            // Список валют
            currencies: [
                {
                    currency: 'USD',
                    name: 'Доллар США'
                },
                {
                    currency: 'EUR',
                    name: 'Евро'
                },
                {
                    currency: 'AUD',
                    name: 'Австралийский доллар'
                },
                {
                    currency: 'BYN',
                    name: 'Белорусский рубль'
                },
                {
                    currency: 'RUB',
                    name: 'Рубль российский'
                },
                {
                    currency: 'NOK',
                    name: 'Норвежская крона'
                }
            ],
            ratesData: {},      // Курс валют
            isLoading: true,    // Флаг загрузки
            msg: ''             // Сообщение о состояния
        }
    },
    methods: {
        async printRates() {
            this.isLoading = true
            this.msg = 'Загрузка данных...'
            // let config = {
            //   headers: {
            //     'Access-Control-Allow-Origin': '*',
            //     'Access-Control-Allow-Headers': '*',
            //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'
            //   }
            // }
            // await axios
            //     .get(`http://cors-anywhere.herokuapp.com/https://freecurrencyapi.net/api/v2/latest?apikey=21a22640-9887-11ec-9769-bf6cd6ccb580&base_currency=${this.baseCurrency.currency.toUpperCase()}`, config)
            //     .then(response => this.ratesData = response.data.data)
            //     .catch( error => console.log(error) )
            
            // Получение данных с API
            await axios
                .get( `http://cors-anywhere.herokuapp.com/https://freecurrencyapi.net/api/v2/latest?apikey=21a22640-9887-11ec-9769-bf6cd6ccb580&base_currency=${this.baseCurrency.currency.toUpperCase()}` )
                .then( response => {
                    this.ratesData = response.data.data 
                    this.isLoading = false
                })
                .catch( () => this.msg = 'Ошибка при загрузке данных...' )
        }
    },
    async created() {
        this.isLoading = true
        this.msg = 'Загрузка данных...'
        await axios
            .get( `http://cors-anywhere.herokuapp.com/https://freecurrencyapi.net/api/v2/latest?apikey=21a22640-9887-11ec-9769-bf6cd6ccb580&base_currency=${this.baseCurrency.currency.toUpperCase()}` )
            .then( response => {
                this.ratesData = response.data.data
                this.isLoading = false
                })
            .catch( () => this.msg = 'Ошибка при загрузке данных...' )
    }
}
</script>

<style>
.rates_currencies {
    display: flex;
    justify-content: center;
    align-items: center;
}

.rates_currencies__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    padding: 20px;
    box-shadow: 0 0 15px #151920;
    border-radius: 10px;
}

.items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.item {
    border: 1px solid #30384b;
    border-radius: 5px;
    padding: 5px 0;
    flex: 1 1 calc((100% / 5) - 2rem);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s linear;
}

.item:hover {
    border: 1px solid #F78361;
}

.select {
    width: 250px;
    height: 30px;
    background-color: transparent;
    font-family: 'Roboto', 'Arial', sans-serif;
    color: white;
    border: 1px solid #4E596F;
    border-radius: 5px;
    transition: all .2s linear;
    margin-bottom: 10px;
}

.select:hover {
    border: 1px solid #F78361;
}

.select:focus {
    outline: none;
}

.select option {
    color: black;
}

.msg {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 300;
    padding-bottom: 5px;
    border-bottom: 1px solid #F78361;
}
</style>