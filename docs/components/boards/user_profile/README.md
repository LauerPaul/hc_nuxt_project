<a name="module_components/boards/user_profile"></a>

## components/boards/user_profile
User profile

**See**: @/components/boards/user_profile  
**Version**: 1.0  
**Author:** Pavel Uhrynovych (lauer.agency)  
**Copyright**: 2018©hearts-club.com  

* [components/boards/user_profile](#module_components/boards/user_profile)
    * _static_
        * [.components](#module_components/boards/user_profile.components)
    * _inner_
        * ["Compomemt <strong>Board User profile</strong> mounted"](#module_components/boards/user_profile..event_Compomemt <strong>Board User profile</strong> mounted)
        * [~Data](#module_components/boards/user_profile..Data) : <code>Object</code>
        * [~Computed](#module_components/boards/user_profile..Computed) : <code>Object</code>

<a name="module_components/boards/user_profile.components"></a>

### components/boards/user_profile.components
Компонент использует компоненты:

**Kind**: static property of <code>[components/boards/user_profile](#module_components/boards/user_profile)</code>  
<a name="module_components/boards/user_profile..event_Compomemt <strong>Board User profile</strong> mounted"></a>

### "Compomemt <strong>Board User profile</strong> mounted"
▶ Hook reporting<strong style="color:red; font-size: 18px;">ⓘ</strong>

**Kind**: event emitted by <code>[components/boards/user_profile](#module_components/boards/user_profile)</code>  
<a name="module_components/boards/user_profile..Data"></a>

### components/boards/user_profile~Data : <code>Object</code>
**Kind**: inner typedef of <code>[components/boards/user_profile](#module_components/boards/user_profile)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| show_diamon_popup | <code>bolean</code> | статус отображения всплывающего окна (инфо о статусе премиум) |

<a name="module_components/boards/user_profile..Computed"></a>

### components/boards/user_profile~Computed : <code>Object</code>
**Kind**: inner typedef of <code>[components/boards/user_profile](#module_components/boards/user_profile)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| avatar | <code>object</code> | ссылка на avatar пользователя (из Store auth) |
| fullName | <code>object</code> | полное имя пользователя (из Store auth) |
| deviceType | <code>object</code> | тип оборудования, с которого пользователь пользуется ресурсом на данный момент (mobil|computer|tablet) (из Store auth) |
| age | <code>object</code> | возраст пользователя (из Store auth) |
| zodiac | <code>object</code> | знак зодиака пользователя (из Store auth) |
| country | <code>object</code> | страна пользователя (из Store auth) |
| city | <code>object</code> | город пользователя (из Store auth) |
| lookingFor | <code>array</code> | массив, кого ищет пользователь (из Store auth) |
| purposes | <code>array</code> | массив целей знакомства на сайте (из Store auth) |
| isPremium | <code>boolean</code> | находится ли профиль в статусе "premium" (из Store auth) |

