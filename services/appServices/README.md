# 🛠 App Services
Сервисы для [**Store App**](/store/app/?id=store-app)

- **see** - ~/services/appServices
- **module** - services/appServices
- **author** - Pavel Lauer (front-end developer lauer.agency) 
- **copyright** - 2018© hearts-club.com
***

#### getLocales(axios, lang) ⇒ <code>promisse</code>
Запрос переводов

**Returns**: <code>promisse</code> - результат запроса

| Param | Type | Description |
| --- | --- | --- |
| axios | <code>object</code> | объект плагина axios |
| lang | <code>string</code> | текущий язык |


#### getConfig(axios) ⇒ <code>promisse</code>
Запрос основных параметров приложения

**Returns**: <code>promisse</code> - результат запроса

| Param | Type | Description |
| --- | --- | --- |
| axios | <code>object</code> | объект плагина axios |


#### getPageConfig(axios, page) ⇒ <code>promisse</code>
Запрос параметров страницы

**Returns**: <code>promisse</code> - результат запроса

| Param | Type | Description |
| --- | --- | --- |
| axios | <code>object</code> | объект плагина axios |
| page | <code>string</code> | ключ страницы |

