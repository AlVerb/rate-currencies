<template>
    <div class="converter">
        <div class="converter__inner">
            <p class="title">Конвертер валют</p>
            <form class="form">
                <input 
                    class="input"
                    type="text" 
                    placeholder="Введите текст..." 
                    v-model="inpText"
                />
                <p class="example">Например: 15 usd in rub</p>
                <button class="button" @click="convertCurrency">Перевести</button>
            </form>
            <p class="answer" v-if="isLoading">Загрузка данных...</p>
            <p class="answer" v-else>{{ answer }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ConverterCurrencies',
    data() {
        return {
            inpText: '',            // Текст поля
            amount: 0,              // Величина базовой валюты
            baseCurrency: '',       // Базовая валюта
            currencyTo: '',         // Целевая валюта
            rates: 0,               // Величина целевой валюты
            answer: '',             // Ответ запроса
            isLoading: false        // Флаг загрузки
        }
    },
    methods: {
        async convertCurrency() {
            this.isLoading = true
            try {
                // Разделение текста на части
                let words = this.inpText.split(' ')
                this.amount = Number(words[0])
                this.baseCurrency = words[1].toUpperCase()
                this.currencyTo = words[3].toUpperCase()
                // Получение данных с API 
                await axios
                    .get( `http://cors-anywhere.herokuapp.com/https://freecurrencyapi.net/api/v2/latest?apikey=21a22640-9887-11ec-9769-bf6cd6ccb580&base_currency=${this.baseCurrency}` )
                    .then( response => {
                        this.rates = response.data.data[this.currencyTo].toFixed(2) * this.amount
                        this.answer = `${this.amount} ${this.baseCurrency} = ${this.rates.toFixed(2)} ${this.currencyTo}`
                        this.isLoading = false
                    })
                    .catch( () => {
                        this.isLoading = false
                        this.answer = 'Ошибка запроса'
                    })
                
            } catch (error) {
                console.log(error)
                this.isLoading = false
                this.answer = 'Некорректный ввод данных'
            }
            
        }
    }
}
</script>

<style>
.converter {
    display: flex;
    justify-content: center;
}

.converter__inner {
    margin-top: 50px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 15px #151920;
    border-radius: 10px;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input {
    width: 450px;
    height: 40px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #4E596F;
    color: white;
    font-size: 22px;
    text-align: center;
    font-weight: 300;
    transition: all .2s linear;
}

.input:hover {
    border-bottom: 1px solid #7c8daf;
}

.input:focus {
    outline: none;
}

.input::placeholder {
    color: #4E596F;
}

.example {
    font-size: 14px;
    color: #4E596F;
    padding: 5px 0;
}

.button {
    background-color: transparent;
    border: 1px solid #F78361;
    border-radius: 5px;
    cursor: pointer;
    color: #F78361;
    width: 150px;
    height: 40px;
    font-size: 16px;
    transition: all .2s linear;
    font-weight: 400;
    font-family: 'Roboto', 'Arial', sans-serif;
    margin: 10px 0 0 0;
}

.button:hover {
    background-color: #F78361;
    color: #242A38;
}

.active {
    background-color: #F78361;
    color: #242A38;
}

.answer {
    margin-top: 50px;
    font-size: 35px;
    font-weight: 300;
    padding-bottom: 5px;
    border-bottom: 1px solid #F78361;
}
</style>