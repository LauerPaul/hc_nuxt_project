# 🛠 Profile Services
Сервисы для профилей

- **see** - ~/services/appServices
- **module** - services/appServices
- **author** - Pavel Lauer (front-end developer lauer.agency) 
- **copyright** - 2018© hearts-club.com
***


#### getProfile(axios, user_url) ⇒ <code>promisse</code>
Запрос данных пользователя

**Returns**: <code>promisse</code> - результат запроса

| Param | Type | Description |
| --- | --- | --- |
| axios | <code>object</code> | объект плагина axios |
| user_url | <code>string</code>\|<code>number</code> | `url` или `id` запрашиваемой страницы |


#### getProfile_secondData(axios, user_url) ⇒ <code>promisse</code>
Запрос вторичных данных пользователя

**Returns**: <code>promisse</code> - результат запроса

| Param | Type | Description |
| --- | --- | --- |
| axios | <code>object</code> | объект плагина axios |
| user_url | <code>string</code>\|<code>number</code> | `url` или `id` запрашиваемой страницы |


#### getNote(axios, params) ⇒ <code>promisse</code>
Запрос заметки к профилю пользователя

**Returns**: <code>promisse</code> - результат запроса

| Param | Type | Description |
| --- | --- | --- |
| axios | <code>object</code> | объект плагина axios |
| params | <code>object</code> | объект параметров |

**Объект параметров `params`:**

| Prop | Type | Description |
| --- | --- | --- |
| user | <code>number</code> | ID авторизованного пользователя |
| user_2 | <code>number</code> | ID профиля, к которому нужно записать заметку |


#### postNote(axios, params) ⇒ <code>promisse</code>
Запрос на обновление заметки к профилю пользователя

**Returns**: <code>promisse</code> - результат запроса

| Param | Type | Description |
| --- | --- | --- |
| axios | <code>object</code> | объект плагина axios |
| params | <code>object</code> | объект параметров |

**Объект параметров `params`:**

| Prop | Type | Description |
| --- | --- | --- |
| user | <code>number</code> | ID авторизованного пользователя |
| user_2 | <code>number</code> | ID профиля, к которому нужно записать заметку |
| text | <code>string</code> | текст заметки |


#### postFavorite(axios, params) ⇒ <code>promisse</code>
Запрос на обновление статуса пользователя в списке "избранное"

**Returns**: <code>promisse</code> - результат запроса

| Param | Type | Description |
| --- | --- | --- |
| axios | <code>object</code> | объект плагина axios |
| params | <code>object</code> | объект параметров |

**Объект параметров `params`:**

| Prop | Type | Description |
| --- | --- | --- |
| user | <code>number</code> | ID авторизованного пользователя |
| user_2 | <code>number</code> | ID профиля, которого нужно добавить или удалить из "избранного" |
| filters | <code>array</code> | массив id фильтров авторизованного пользователя, которые нужно применить к выбранному профилю |
