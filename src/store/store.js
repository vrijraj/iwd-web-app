import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      drawer:false,
      vname:"asdasd"
    },
    mutations: {
        setDrawer: (state, payload)=>(state.drawer = payload),
        toggleDrawer: state=>(state.drawer = !state.drawer)
    }
})