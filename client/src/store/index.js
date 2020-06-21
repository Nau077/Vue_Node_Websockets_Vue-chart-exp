import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // we store messages as a dictionary for easier access and interaction
    // @see https://hackernoon.com/shape-your-redux-store-like-your-database-98faa4754fd5
    dataTable: [],
    dataChart: []
  },
  mutations: {
    SET_DATA_TABLE(state, data) {
      state.dataTable = data.flat();
    },
    SET_DATA_CHART(state, data) {
      state.dataChart = {...data}
    }
  },
  actions: { 
    socket_setDataTable ({ commit }, data) {
       commit('SET_DATA_TABLE', data);
 
    },
    socket_setDataChart ({ commit }, data) {
      commit('SET_DATA_CHART', data);
   },
    dataChange({ commit }, payload ) {
      console.log(payload)
        this._vm.$socket.client.emit('dataTableChange', payload)
   }
  }
})