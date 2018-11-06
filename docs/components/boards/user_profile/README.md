<a name="module_components/boards/user_profile"></a>

## components/boards/user_profile
User profile

**See**: @/components/boards/user_profile  
**Version**: 1.0  
**Author:** Pavel Uhrynovych (lauer.agency)  
**Copyright**: 2018©hearts-club.com  

* [components/boards/user_profile](#module_components/boards/user_profile)
    * _static_
        * [.computed](#module_components/boards/user_profile.computed) : <code>object</code>
    * _inner_
        * [~avatar()](#module_components/boards/user_profile..avatar) ⇒ <code>string</code>
        * [~fullName()](#module_components/boards/user_profile..fullName) ⇒ <code>string</code>
        * [~locale()](#module_components/boards/user_profile..locale) ⇒ <code>string</code>
        * [~data](#module_components/boards/user_profile..data) : <code>Object</code>
        * [~Props](#module_components/boards/user_profile..Props) : <code>Object</code>

<a name="module_components/boards/user_profile.computed"></a>

### components/boards/user_profile.computed : <code>object</code>
**Kind**: static namespace of <code>[components/boards/user_profile](#module_components/boards/user_profile)</code>  
<a name="module_components/boards/user_profile..avatar"></a>

### components/boards/user_profile~avatar() ⇒ <code>string</code>
Ссылка на аватар пользователя

**Kind**: inner method of <code>[components/boards/user_profile](#module_components/boards/user_profile)</code>  
<a name="module_components/boards/user_profile..fullName"></a>

### components/boards/user_profile~fullName() ⇒ <code>string</code>
Полное имя пользователя

**Kind**: inner method of <code>[components/boards/user_profile](#module_components/boards/user_profile)</code>  
<a name="module_components/boards/user_profile..locale"></a>

### components/boards/user_profile~locale() ⇒ <code>string</code>
Локации пользователя

**Kind**: inner method of <code>[components/boards/user_profile](#module_components/boards/user_profile)</code>  
<a name="module_components/boards/user_profile..data"></a>

### components/boards/user_profile~data : <code>Object</code>
**Kind**: inner typedef of <code>[components/boards/user_profile](#module_components/boards/user_profile)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| show_diamon_popup | <code>bolean</code> | статус видимости информационного popup-окна о **premium** статусе |

<a name="module_components/boards/user_profile..Props"></a>

### components/boards/user_profile~Props : <code>Object</code>
Компонент ожидает **props** `:user` - объект данных пользователя

**Kind**: inner typedef of <code>[components/boards/user_profile](#module_components/boards/user_profile)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user | <code>object</code> | объект данных пользователя |
| user.id | <code>object</code> | id пользователя |
| user.url | <code>object</code> | url страницы пользователя |
| user.status_text | <code>object</code> | Текстовый статус страницы пользователя |
| user.fullName_ru | <code>string</code> | полное имя пользователя кириллицей (если не заполнено - заполняется латиницей) |
| user.fullName_en | <code>string</code> | полное имя пользователя латиницей |
| user.avatar | <code>object</code> | ссылка на avatar пользователя |
| user.deviceType | <code>string</code> | тип оборудования, с которого пользователь пользуется ресурсом на данный момент (**Допустимые значения**: `mobile`, `computer`, `tablet`) |
| user.age | <code>number</code> | возраст пользователя |
| user.zodiac | <code>string</code> | знак зодиака пользователя |
| user.country | <code>string</code> | страна пользователя |
| user.city | <code>string</code> | город пользователя |
| user.lookingFor | <code>array</code> | массив `id`, кого ищет пользователь |
| user.purposes | <code>array</code> | массив `id` целей знакомства на сайте |
| user.isPremium | <code>boolean</code> | находится ли профиль в статусе "premium" |

