import { make } from 'vuex-pathify'

export const state = () => ({
  lists: null,
})

export const mutations = {
  ...make.mutations(state),
  RESET_LIST: (state) => {
    state.lists = null
  },
  SET_LIST: (state) => {
    state.lists = [1,2,3,4,5]
  }
}