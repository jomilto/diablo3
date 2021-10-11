// Importamos nuestra función que obtiene el token
// @ es un alias para /src
import * as oauth from '@/api/oauth'

// Creamos el objeto con "Espacio de Nombres"
export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    async getToken ({ commit }) {
      commit('loading/SET_LOADING', true, { root: true })
      try {
        const { data } = await oauth.getToken()
        commit('SET_ACCESS_TOKEN', data.access_token)
      } catch (error) {
        commit('SET_ACCESS_TOKEN', null)
        console.error('Error OAuth: ', error)
      } finally {
        commit('loading/SET_LOADING', false, { root: true })
      }
    }
  }
}
