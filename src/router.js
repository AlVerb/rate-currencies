import { createRouter, createWebHashHistory } from 'vue-router'

import ConverterCurrencies from './components/ConverterCurrencies.vue'
import RatesCurrencies from './components/RatesCurrencies.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: ConverterCurrencies,
            alias: '/'
        },
        {
            path: '/rates-currencies',
            component: RatesCurrencies
        }
    ]
})
