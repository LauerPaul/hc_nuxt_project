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
`locale` 					| ***String***  | Текущий язык приложения
`locales`	     			| ***Array***   | Массив объектов с языковыми параметрами [(см. свойства)](/store/app/?id=Свойства-state-locales "Свойства State locales")
`translation`  				| ***Object***  | Объект переводов для текущего языка
`logo`  					| ***Object***  | Объект с параметрами логотипа [(см. свойства)](/store/app/?id=Свойства-state-logo "Свойства State logo")
`config`  					| ***Object***  | Объект с параметрами компонентов и страниц
`menu`  					| ***Object***  | Массив объектов с параметрами списка меню [(см. свойства)](/store/app/?id=Свойства-state-menu "Свойства State menu")

### Свойства State `locales`
Переменная `locales` является массивом объектов. Каждый объект массива включает в себя следующие свойства:

Variable  	|     Type 	    | Description
:---------- |:-------------:| :-------------------------------------------------
`code`  	| ***String***  | Код языка в нижнем регистре *(например: **'ru'**)*
`iso`  		| ***String***  | Iso-код языка для seo *(напремер: **'ru-RU'**)*
`name`  	| ***String***  | Название языка *(напремер: **'Русский'**)*
`domain` 	| ***String***  | Домен, к которому привязан язык *(например: **ru.domain.com**)*

### Свойства State `logo`
Переменная `logo` является объектом и включает в себя следующие свойства:

Variable  	|     Type 	    | Description
:---------- |:-------------:| :-------------------------------------------------
`src`  | ***String***  | Ссылка на изображение
`alt`  | ***String***  | Атрибут ALT

### Свойства State `menu`
Переменная `menu` является массивом объектов. Каждый объект массива может включать в себя следующие свойства:

Variable  		|     Type 	    | Description
:-------------- |:-------------:| :-------------------------------------------------
`key`			| ***String***  | Уникальный ключ элемента
`name`			| ***Object***  | Объект названий
`name.*key`		| ***String***  | Название пункта меню *(ключем является `code` языка)*
`link`			| ***String***  | Ссылка меню *(может быть `name` роута - зависит от параметра `link_type`)*
`link_type`		| ***String***  | Ключ для `router-link` *(`path` - ссылка или `name` - название роута [Подробнее](https://router.vuejs.org/api/#to))*
`icon`			| ***String***  | Селектор **`class=""`** в html для иконки
`special_class`	| ***String***  | Специальный селектор **`class=""`** в html для текущего элемента списка
`status`		| ***Boolean*** | Статус кликабельности
`notify`		| ***Boolean*** | Статус оповищиней *(**counter** для данного пункта)*
`devider`		| ***Boolean*** | Рразделительная полоса в списке меню <br> 

🛈 *при значении `devider: true` все остальные ключи игнорируются, поэтому, они могут отсутствовать*

***

## Mutations
- **see** - ~/store/app/mutations.js
- **module** - store/app/mutations 
***

* `SET_LANG(state, lang)`
Назначение текущего языка
	- `lang` ***String***
	Code языка

* `SET_MESSAGES(state, obj)`
Назначение переводов в **state** `translation`
	- `obj` ***Object***
	Объект переводов

* `SET_CONFIG(state, obj)`
Назначение параметров в **state** `config`
	- `obj` ***Object***
	Объект параметров

* `SET_MENU(state, obj)`
Назначение списка меню в **state** `menu`
	- `obj` ***Array***
	Массив объектов меню

* `SET_LOGO(state, obj)`
Назначение параметров логотипа в **state** `logo`
	- `obj` ***Object***
	Объект параметров


## Actions
- **see** - ~/store/app/actions.js
- **module** - store/app/actions 
***

* `getMessages({ commit }, lang = DEFAUL_LANGUAGE)` 
Загрузка переводов. Обращается к services/appServices
	`lang` ***String***
	Code языка

* `getConfig({ commit })` 
Загрузка параметров слоев и страниц. Обращается к services/appServices