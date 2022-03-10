(function(){"use strict";var e={1011:function(e,r,t){var n=t(9242),a=t(3396);const s={class:"header"},c={class:"header__inner"},i=(0,a.Uk)("Конвертер"),o=(0,a.Uk)("Курс валют"),u={class:"container"};function p(e,r,t,n,p,l){const h=(0,a.up)("router-link"),d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("header",s,[(0,a._)("div",c,[(0,a.Wm)(h,{class:"link",to:"/"},{default:(0,a.w5)((()=>[i])),_:1}),(0,a.Wm)(h,{class:"link",to:"/rates-currencies"},{default:(0,a.w5)((()=>[o])),_:1})])]),(0,a._)("div",u,[(0,a.Wm)(d)])])}var l={name:"App"},h=t(89);const d=(0,h.Z)(l,[["render",p]]);var y=d,f=t(678),v=t(7139);const m={class:"converter"},w={class:"converter__inner"},g=(0,a._)("p",{class:"title"},"Конвертер валют",-1),b={class:"form"},_=(0,a._)("p",{class:"example"},"Например: 15 usd in rub",-1),C={key:0,class:"answer"},k={key:1,class:"answer"};function D(e,r,t,s,c,i){return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("div",w,[g,(0,a._)("form",b,[(0,a.wy)((0,a._)("input",{class:"input",type:"text",placeholder:"Введите текст...","onUpdate:modelValue":r[0]||(r[0]=e=>c.inpText=e)},null,512),[[n.nr,c.inpText]]),_,(0,a._)("button",{class:"button",onClick:r[1]||(r[1]=(...e)=>i.convertCurrency&&i.convertCurrency(...e))},"Перевести")]),c.isLoading?((0,a.wg)(),(0,a.iD)("p",C,"Загрузка данных...")):((0,a.wg)(),(0,a.iD)("p",k,(0,v.zw)(c.answer),1))])])}var U=t(6265),x=t.n(U),L={name:"ConverterCurrencies",data(){return{inpText:"",amount:0,baseCurrency:"",currencyTo:"",rates:0,answer:"",isLoading:!1}},methods:{async convertCurrency(){this.isLoading=!0;try{let e=this.inpText.split(" ");this.amount=Number(e[0]),this.baseCurrency=e[1].toUpperCase(),this.currencyTo=e[3].toUpperCase(),await x().get(`http://cors-anywhere.herokuapp.com/https://freecurrencyapi.net/api/v2/latest?apikey=21a22640-9887-11ec-9769-bf6cd6ccb580&base_currency=${this.baseCurrency}`).then((e=>{this.rates=e.data.data[this.currencyTo].toFixed(2)*this.amount,this.answer=`${this.amount} ${this.baseCurrency} = ${this.rates.toFixed(2)} ${this.currencyTo}`,this.isLoading=!1})).catch((()=>{this.isLoading=!1,this.answer="Ошибка запроса"}))}catch(e){console.log(e),this.isLoading=!1,this.answer="Некорректный ввод данных"}}}};const O=(0,h.Z)(L,[["render",D]]);var T=O;const z={class:"rates_currencies"},R={class:"rates_currencies__inner"},$=(0,a._)("p",{class:"title"},"Курс валюты",-1),j=["value"],F={key:0,class:"msg"},B={key:1,class:"items"};function K(e,r,t,s,c,i){return(0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("div",R,[$,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":r[0]||(r[0]=e=>c.baseCurrency=e),onChange:r[1]||(r[1]=(...e)=>i.printRates&&i.printRates(...e)),class:"select"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.currencies,((e,r)=>((0,a.wg)(),(0,a.iD)("option",{value:e,key:r},(0,v.zw)(e.currency)+" - "+(0,v.zw)(e.name),9,j)))),128))],544),[[n.bM,c.baseCurrency]]),c.isLoading?((0,a.wg)(),(0,a.iD)("p",F,(0,v.zw)(c.msg),1)):((0,a.wg)(),(0,a.iD)("div",B,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.ratesData,((e,r,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"item",key:t}," 1 "+(0,v.zw)(r)+" = "+(0,v.zw)((1/e).toFixed(4))+" "+(0,v.zw)(c.baseCurrency.currency.toUpperCase()),1)))),128))]))])])}var N={name:"RatesCurrencies",data(){return{baseCurrency:{currency:"RUB",name:"Рубль российский"},currencies:[{currency:"USD",name:"Доллар США"},{currency:"EUR",name:"Евро"},{currency:"AUD",name:"Австралийский доллар"},{currency:"BYN",name:"Белорусский рубль"},{currency:"RUB",name:"Рубль российский"},{currency:"NOK",name:"Норвежская крона"}],ratesData:{},isLoading:!0,msg:""}},methods:{async printRates(){this.isLoading=!0,this.msg="Загрузка данных...",await x().get(`http://cors-anywhere.herokuapp.com/https://freecurrencyapi.net/api/v2/latest?apikey=21a22640-9887-11ec-9769-bf6cd6ccb580&base_currency=${this.baseCurrency.currency.toUpperCase()}`).then((e=>{this.ratesData=e.data.data,this.isLoading=!1})).catch((()=>this.msg="Ошибка при загрузке данных..."))}},async created(){this.isLoading=!0,this.msg="Загрузка данных...",await x().get(`http://cors-anywhere.herokuapp.com/https://freecurrencyapi.net/api/v2/latest?apikey=21a22640-9887-11ec-9769-bf6cd6ccb580&base_currency=${this.baseCurrency.currency.toUpperCase()}`).then((e=>{this.ratesData=e.data.data,this.isLoading=!1})).catch((()=>this.msg="Ошибка при загрузке данных..."))}};const W=(0,h.Z)(N,[["render",K]]);var Y=W,Z=(0,f.p7)({history:(0,f.r5)(),routes:[{path:"/",component:T,alias:"/"},{path:"/rates-currencies",component:Y}]});const A=(0,n.ri)(y);A.use(Z),A.mount("#app")}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var s=r[n]={exports:{}};return e[n](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(r,n,a,s){if(!n){var c=1/0;for(p=0;p<e.length;p++){n=e[p][0],a=e[p][1],s=e[p][2];for(var i=!0,o=0;o<n.length;o++)(!1&s||c>=s)&&Object.keys(t.O).every((function(e){return t.O[e](n[o])}))?n.splice(o--,1):(i=!1,s<c&&(c=s));if(i){e.splice(p--,1);var u=a();void 0!==u&&(r=u)}}return r}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[n,a,s]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var a,s,c=n[0],i=n[1],o=n[2],u=0;if(c.some((function(r){return 0!==e[r]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(o)var p=o(t)}for(r&&r(n);u<c.length;u++)s=c[u],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(p)},n=self["webpackChunkrate_currencies_app"]=self["webpackChunkrate_currencies_app"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(1011)}));n=t.O(n)})();
//# sourceMappingURL=app.6757457a.js.map