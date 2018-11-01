import createMutationsSharer from 'vuex-shared-mutations'
import store from '~/store/'
import arr from '~/config/client/shared-mutations'

export default ({store}) => {
  createMutationsSharer({
  	predicate: arr
  })(store)
}