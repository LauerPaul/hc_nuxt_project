# Store App
Хранилище данных и параметров приложения.

- **namespace** - App
- **see** - ~/store/app/
- **module** - store/app 
- **author** - Pavel Lauer (front-end developer lauer.agency) 
- **copyright** - 2018© hearts-club.com
***

## State
- **see** - ~/store/app/state.js
- **module** - store/app/state 


Variable  					|     Type 	    | Description
:-------------------------- |:-------------:| :-------------------------------------------------
locale 					| `string`  | Текущий язык приложения
locales	     			| `array`   | Массив объектов с языковыми параметрами [(см. свойства)](/store/app/?id=Свойства-state-locales "Свойства State locales")
translation				| `object`  | Объект переводов для текущего языка
logo					| `object`  | Объект с параметрами логотипа [(см. свойства)](/store/app/?id=Свойства-state-logo "Свойства State logo")
config 					| `object`  | Объект с параметрами компонентов и страниц
menu  					| `object`  | Массив объектов с параметрами списка меню [(см. свойства)](/store/app/?id=Свойства-state-menu "Свойства State menu")

### Свойства State `locales`
Переменная `locales` является массивом объектов. Каждый объект массива включает в себя следующие свойства:

Variable  	|     Type 	    | Description
:---------- |:-------------:| :-------------------------------------------------
code  	| `string`  | Код языка в нижнем регистре *(например: **'ru'**)*
iso  	| `string`  | Iso-код языка для seo *(напремер: **'ru-RU'**)*
name  	| `string`  | Название языка *(напремер: **'Русский'**)*
domain 	| `string`  | Домен, к которому привязан язык *(например: **ru.domain.com**)*

### Свойства State `logo`
Переменная `logo` является объектом и включает в себя следующие свойства:

Variable  	|     Type 	    | Description
:---------- |:-------------:| :-------------------------------------------------
src  | `string`  | Ссылка на изображение
alt  | `string`  | Атрибут ALT

### Свойства State `menu`
Переменная `menu` является массивом объектов. Каждый объект массива может включать в себя следующие свойства:

Variable  		|     Type 	    | Description
:-------------- |:-------------:| :-------------------------------------------------
key				| `string`  | Уникальный ключ элемента
name			| `object`  | Объект названий
name.*key		| `string`  | Название пункта меню *(ключем является `code` языка)*
link			| `string`  | Ссылка меню *(может быть `name` роута - зависит от параметра `link_type`)*
link_type		| `string`  | Ключ для `router-link` *(`path` - ссылка или `name` - название роута [Подробнее](https://router.vuejs.org/api/#to))*
icon			| `string`  | Селектор **`class=""`** в html для иконки
special_class	| `string`  | Специальный селектор **`class=""`** в html для текущего элемента списка
status		| `boolean` | Статус кликабельности
notify		| `boolean` | Статус оповищиней *(**counter** для данного пункта)*
devider		| `boolean` | Рразделительная полоса в списке меню <br> 

🛈 *при значении `devider: true` все остальные ключи игнорируются, поэтому, они могут отсутствовать*

***

## Mutations
- **see** - ~/store/app/mutations.js
- **module** - store/app/mutations 
***


#### SET_LANG(state, lang)
Назначение текущего языка

| Param | Type | Description |
| --- | --- | --- |
| lang | <code>string</code> | `code` языка |


#### SET_MESSAGES(state, obj)
Назначение переводов в **state** `translation`

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | Объект переводов |


#### SET_CONFIG(state, obj)
Назначение параметров в **state** `config`

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | Объект параметров |


#### SET_MENU(state, obj)
Назначение списка меню в **state** `menu`

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>array</code> | Массив объектов меню |


#### SET_LOGO(state, obj)
Назначение параметров логотипа в **state** `logo`

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | Объект параметров |

***

## Actions
- **see** - ~/store/app/actions.js
- **module** - store/app/actions 
***

#### async getMessages({ commit }, lang = DEFAUL_LANGUAGE)
Загрузка переводов. Асинхронно обращается к [**App Services** ⇒ getMessages(axios, lang)](/services/app_services/?id=getmessagesaxios-lang-⇒-promisse)

**Async**: `true`<br>
**Returns**: call mutation [**Store App** ⇒ SET_MESSAGES(state, obj)](/store/app/?id=set_messagesstate-obj)

| Param | Type | Description |
| --- | --- | --- |
| lang | <code>string</code> | `code` языка |


#### async getConfig({ commit })
Загрузка параметров слоев и страниц. Обращается к [**App Services** ⇒ getMessages(axios, lang)](/services/app_services/?id=getconfigaxios-⇒-promisse)

**Async**: `true`<br>
**Returns**:
> call mutation [**Store App** ⇒ SET_CONFIG(state, obj)](/store/app/?id=set_configstate-obj)<br>
> call mutation [**Store App** ⇒ SET_MENU(state, obj)](/store/app/?id=set_menustate-obj)<br>
> call mutation [**Store App** ⇒ SET_LOGO(state, obj)](/store/app/?id=set_logostate-obj)<br>