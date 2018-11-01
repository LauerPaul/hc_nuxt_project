# Server Init
Метод Vuex (см. [руководство](https://ru.nuxtjs.org/guide/vuex-store/#действие-nuxtserverinit)). Выполняется на сервере.

- **see** - ~/store/nuxtServerInit/
- **module** - store/nuxtServerInit 
- **author** - Pavel Lauer (front-end developer lauer.agency) 
- **copyright** - 2018© hearts-club.com
***

* Определяет язык приложения. 
* Вызывает [мутацию **Store App**](/store/app/?id=mutations) `SET_LANG`
* Вызывает [событие **Store App**](/store/app/?id=actions) `getMessages`
* Вызывает [событие **Store App**](/store/app/?id=actions) `getConfig`

