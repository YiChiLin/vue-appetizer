import Vue from 'vue'
import Vuex from 'vuex'

//using {} is because mutations is not export as default
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
    jokes: []
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})