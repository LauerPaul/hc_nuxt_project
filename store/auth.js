/**
*   @version 1.0 beta
*   @module store/auth
*   @desc <strong>Store auth</strong> - хранилище данных пользователя
*   @see ~/store/auth
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
const auth = {
    /**
    * @namespace ⭐Store-auth▸state
    *   @property {string} avatar - ссылка на avatar пользователя
    *   @property {string} userFullName - полное имя пользователя
    *   @property {string} userDeviceType - тип оборудования, с которого пользователь пользуется ресурсом на данный момент (mobil|computer|tablet)
    *   @property {int} age - возраст пользователя
    *   @property {string} zodiac - знак зодиака пользователя
    *   @property {string} country - страна пользователя
    *   @property {string} city - город пользователя
    *   @property {array} lookingFor - массив, кого пользователь ищет
    *   @property {array} purposes - массив целей знакомства на сайте
    *   @property {boolean} isPremium - находится ли профиль в статусе "premium"
    */
    namespaced: true,
    state: {
        avatar: require('@/assets/images/tmp/profile_avatar.jpg'),
        fullName: 'Вероника Соколова',
        deviceType: 'mobile',
        age: 27,
        zodiac: 'Близнецы',
        country: 'Украина',
        city: 'Харьков',
        lookingFor: [
            'Мужчину',
            'Женщину',
            'Пару'
        ],
        purposes: [
            'Секс без обязательств',
            'Секс без обязательств с постоянным партнером',
            ' Обмен интим-фото',
            'Интим-переписка'
        ],
        isPremium: true

    },

    getters: {
        userId: state => { if (state.user) return state.user.id; else return false }
    },

    mutations: {
    },
}

export default auth