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
            * [.avatar()](#module_components/boards/user_profile.computed.avatar) ⇒ <code>string</code>
            * [.fullName()](#module_components/boards/user_profile.computed.fullName) ⇒ <code>string</code>
            * [.locale()](#module_components/boards/user_profile.computed.locale) ⇒ <code>string</code>
    * _inner_
        * [~data](#module_components/boards/user_profile..data) : <code>Object</code>
        * [~Props](#module_components/boards/user_profile..Props) : <code>Object</code>

<a name="module_components/boards/user_profile.computed"></a>

### components/boards/user_profile.computed : <code>object</code>
**Kind**: static namespace of <code>[components/boards/user_profile](#module_components/boards/user_profile)</code>  

* [.computed](#module_components/boards/user_profile.computed) : <code>object</code>
    * [.avatar()](#module_components/boards/user_profile.computed.avatar) ⇒ <code>string</code>
    * [.fullName()](#module_components/boards/user_profile.computed.fullName) ⇒ <code>string</code>
    * [.locale()](#module_components/boards/user_profile.computed.locale) ⇒ <code>string</code>

<a name="module_components/boards/user_profile.computed.avatar"></a>

#### computed.avatar() ⇒ <code>string</code>
Ссылка на аватар пользователя

**Kind**: static method of <code>[computed](#module_components/boards/user_profile.computed)</code>  
<a name="module_components/boards/user_profile.computed.fullName"></a>

#### computed.fullName() ⇒ <code>string</code>
Полное имя пользователя

**Kind**: static method of <code>[computed](#module_components/boards/user_profile.computed)</code>  
<a name="module_components/boards/user_profile.computed.locale"></a>

#### computed.locale() ⇒ <code>string</code>
Локации пользователя

**Kind**: static method of <code>[computed](#module_components/boards/user_profile.computed)</code>  
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
| user.avatar | <code>object</code> | ссылка на avatar пользователя |
| user.fullName | <code>string</code> | полное имя пользователя |
| user.deviceType | <code>string</code> | тип оборудования, с которого пользователь пользуется ресурсом на данный момент (**Допустимые значения**: `mobile`, `computer`, `tablet`) |
| user.age | <code>number</code> | возраст пользователя |
| user.zodiac | <code>string</code> | знак зодиака пользователя |
| user.country | <code>string</code> | страна пользователя |
| user.city | <code>string</code> | город пользователя |
| user.lookingFor | <code>array</code> | массив, кого ищет пользователь |
| user.purposes | <code>array</code> | массив целей знакомства на сайте |
| user.isPremium | <code>boolean</code> | находится ли профиль в статусе "premium" |

