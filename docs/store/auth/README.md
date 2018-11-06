# Store App
Хранилище данных и параметров приложения.

- **namespace** - App
- **see** - ~/store/auth/
- **module** - store/auth 
- **author** - Pavel Lauer (front-end developer lauer.agency) 
- **copyright** - 2018© hearts-club.com
***

## State
- **see** - ~/store/auth/state.js
- **module** - store/auth/state 


Variable   |     Type 	   | Description
:----------|:-------------:| :---------------------------------------
selectUser | `object` \| `null`  | Текущий язык приложения


### Свойства State `selectUser`
State `selectUser` включает в себя следующие свойства:

Variable  	|     Type 	    | Description
:---------- |:-------------:| :-------------------------------------------------

***

## Getters
- **see** - ~/store/auth/getters.js
- **module** - store/auth/getters 

#### userId(state)
Запрос ID текущего пользователя<br>
**Returns**: `state.user.id`

***

## Mutations
- **see** - ~/store/auth/mutations.js
- **module** - store/auth/mutations 
***


#### SET_SELECT_USER(state, data)
Назначение переменной `selectUser`

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | объект данных пользователя |


***

## Actions
- **see** - ~/store/auth/actions.js
- **module** - store/auth/actions 
***

#### setSelectUser({ commit }, user_data)
Метод вызова мутации назначения переменной `selectUser`

**Returns**: call mutation [**Store auth** ⇒ SET_SELECT_USER(state, data)](/store/auth/?id=set_select_userstate-data)

| Param | Type | Description |
| --- | --- | --- |
| user_data | <code>object</code> | объект данных пользователя |

#### resetSelectUser({ commit })
Метод вызова мутации для "сброса" переменной `selectUser`

**Returns**: call mutation [**Store auth** ⇒ SET_SELECT_USER(state, null)](/store/auth/?id=set_select_userstate-data)

| Param | Type | Description |
| --- | --- | --- |
| user_data | <code>object</code> | объект данных пользователя |
