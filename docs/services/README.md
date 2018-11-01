<a name="module_components/common/site-menu"></a>

## components/common/site-menu
Site menu

**See**: @/components/common/site-menu
**Version**: 1.0
**Author**: Pavel Uhrynovych (lauer.agency)
**Copyright**: 2018©hearts-club.com

* [components/common/site-menu](#module_components/common/site-menu)
    * [module.exports](#exp_module_components/common/site-menu--module.exports)⏏
        * _static_
            * [.components](#module_components/common/site-menu--module.exports.components)
        * _inner_
            * [~routeFormat(item)](#module_components/common/site-menu--module.exports..routeFormat) ⇒ <code>object</code> \| <code>string</code>
            * [~elementClass(item)](#module_components/common/site-menu--module.exports..elementClass) ⇒ <code>false</code> \| <code>string</code>
            * ["Compomemt <strong>Site menu</strong> mounted"](#module_components/common/site-menu--module.exports..event_Compomemt <strong>Site menu</strong> mounted)

<a name="exp_module_components/common/site-menu--module.exports"></a>

### module.exports ⏏
Export component

**Kind**: Exported member
<a name="module_components/common/site-menu--module.exports.components"></a>

#### module.exports.components
Компонент использует компоненты:

**Kind**: static property of [<code>module.exports</code>](#exp_module_components/common/site-menu--module.exports)
<a name="module_components/common/site-menu--module.exports..routeFormat"></a>

#### module.exports~routeFormat(item) ⇒ <code>object</code> \| <code>string</code>
Формирует роут элемента списка меню

**Kind**: inner method of [<code>module.exports</code>](#exp_module_components/common/site-menu--module.exports)
**Returns**: <code>object</code> \| <code>string</code> - - объект для router-link(:to) или #, если объект имеет ключ logout (кнопка выхода)

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | объект элемента |

<a name="module_components/common/site-menu--module.exports..elementClass"></a>

#### module.exports~elementClass(item) ⇒ <code>false</code> \| <code>string</code>
Формирует селектор class элемента списка меню

**Kind**: inner method of [<code>module.exports</code>](#exp_module_components/common/site-menu--module.exports)
**Returns**: <code>false</code> \| <code>string</code> - - если объект не имеетспециального класса или статуса false - false; Строка класса

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | объект элемента |

<a name="module_components/common/site-menu--module.exports..event_Compomemt <strong>Site menu</strong> mounted"></a>

#### "Compomemt <strong>Site menu</strong> mounted"
<strong style="color:red; font-size: 18px;">ⓘ</strong>

**Kind**: event emitted by [<code>module.exports</code>](#exp_module_components/common/site-menu--module.exports)
